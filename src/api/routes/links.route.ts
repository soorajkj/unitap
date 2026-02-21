import { zValidator } from "@hono/zod-validator";
import { authMiddleware } from "@/api/middlewares/auth.middleware";
import { hono } from "@/lib/hono";
import {
  createLinkSchema,
  reorderLinksSchema,
  updateLinkSchema,
} from "@/utils/validators/links";

export const linksRoute = hono
  .createApp()
  .use(authMiddleware)
  .get("/", async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");

    const links = await db.link.findMany({
      where: { userId: user.id },
      orderBy: [{ order: "asc" }, { id: "asc" }],
    });

    return c.json(links);
  })
  .post("/", zValidator("json", createLinkSchema), async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const json = c.req.valid("json");

    const firstLink = await db.link.findFirst({
      where: { userId: user.id, archive: false },
      orderBy: [{ order: "asc" }, { id: "asc" }],
      select: { order: true },
    });

    const newOrder = firstLink ? firstLink.order - 1 : 0;

    const link = await db.link.create({
      data: {
        userId: user.id,
        order: newOrder,
        ...json,
      },
    });

    return c.json(link);
  })
  .patch("/reorder", zValidator("json", reorderLinksSchema), async (c) => {
    const user = c.get("user");
    const db = c.get("prisma");
    const json = c.req.valid("json");

    await db.$transaction(
      json.ids.map((id, index) =>
        db.link.update({
          where: {
            id,
            userId: user.id,
          },
          data: { order: index },
        }),
      ),
    );

    return c.json("success");
  })
  .patch("/:id", zValidator("json", updateLinkSchema), async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const { id } = c.req.param();
    const json = c.req.valid("json");

    const result = await db.link.updateMany({
      where: {
        userId: user.id,
        id,
      },
      data: json,
    });

    return c.json(result);
  })
  .delete("/:id", async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const { id } = c.req.param();

    const result = await db.link.deleteMany({
      where: {
        userId: user.id,
        id,
      },
    });

    return c.json(result);
  });
