import { zValidator } from "@hono/zod-validator";
import { authMiddleware } from "@/api/middlewares/auth.middleware";
import { profileMiddleware } from "@/api/middlewares/profile.middleware";
import { hono } from "@/lib/hono";
import {
  createLinkSchema,
  reorderLinksSchema,
  updateLinkSchema,
} from "@/utils/validators/links";

export const linksRoute = hono
  .createApp()
  .use(authMiddleware)
  .use(profileMiddleware)
  .get("/", async (c) => {
    const db = c.get("prisma");
    const profileId = c.get("profileId");

    const links = await db.link.findMany({
      where: { profileId },
      orderBy: [{ order: "asc" }, { id: "asc" }],
    });

    return c.json(links);
  })
  .post("/", zValidator("json", createLinkSchema), async (c) => {
    const db = c.get("prisma");
    const profileId = c.get("profileId");
    const json = c.req.valid("json");

    const firstLink = await db.link.findFirst({
      where: { profileId, archive: false },
      orderBy: [{ order: "asc" }, { id: "asc" }],
      select: { order: true },
    });

    const newOrder = firstLink ? firstLink.order - 1 : 0;

    const link = await db.link.create({
      data: {
        profileId,
        order: newOrder,
        ...json,
      },
    });

    return c.json(link);
  })
  .patch("/reorder", zValidator("json", reorderLinksSchema), async (c) => {
    const profileId = c.get("profileId");
    const db = c.get("prisma");
    const json = c.req.valid("json");

    await db.$transaction(
      json.ids.map((id, index) =>
        db.link.update({
          where: {
            id,
            profileId,
          },
          data: { order: index },
        }),
      ),
    );

    return c.json("success");
  })
  .patch("/:id", zValidator("json", updateLinkSchema), async (c) => {
    const db = c.get("prisma");
    const profileId = c.get("profileId");
    const { id } = c.req.param();
    const json = c.req.valid("json");

    const result = await db.link.updateMany({
      where: {
        profileId,
        id,
      },
      data: json,
    });

    return c.json(result);
  })
  .delete("/:id", async (c) => {
    const db = c.get("prisma");
    const profileId = c.get("profileId");
    const { id } = c.req.param();

    const result = await db.link.deleteMany({
      where: {
        profileId,
        id,
      },
    });

    return c.json(result);
  });
