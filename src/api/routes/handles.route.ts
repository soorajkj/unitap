import { zValidator } from "@hono/zod-validator";
import { authMiddleware } from "@/api/middlewares/auth.middleware";
import { hono } from "@/lib/hono";
import {
  createHandleSchema,
  reorderHandlesSchema,
  updateHandleSchema,
} from "@/utils/validators/handles";

export const handlesRoute = hono
  .createApp()
  .use(authMiddleware)
  .get("/", async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");

    const handles = await db.handle.findMany({
      where: { userId: user.id },
      include: { platform: true },
      orderBy: { order: "asc" },
    });

    return c.json(handles);
  })
  .post("/", zValidator("json", createHandleSchema), async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const json = c.req.valid("json");

    const firstLink = await db.handle.findFirst({
      where: { userId: user.id },
      orderBy: [{ order: "asc" }, { id: "asc" }],
      select: { order: true },
    });

    const newOrder = firstLink ? firstLink.order - 1 : 0;

    const handle = await db.handle.create({
      data: {
        userId: user.id,
        order: newOrder,
        ...json,
      },
    });

    return c.json(handle);
  })
  .patch("/reorder", zValidator("json", reorderHandlesSchema), async (c) => {
    const user = c.get("user");
    const db = c.get("prisma");
    const json = c.req.valid("json");

    await db.$transaction(
      json.platformIds.map((platformId, index) =>
        db.handle.update({
          where: {
            platformId_userId: {
              platformId,
              userId: user?.id,
            },
          },
          data: { order: index },
        }),
      ),
    );

    return c.json("success");
  })
  .get("/:id", async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const { id } = c.req.param();

    const handle = await db.handle.findUnique({
      where: {
        userId: user.id,
        id,
      },
      include: { platform: true },
    });

    return c.json(handle);
  })
  .patch("/:id", zValidator("json", updateHandleSchema), async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const { id } = c.req.param();
    const data = c.req.valid("json");

    const result = await db.handle.updateMany({
      where: {
        userId: user.id,
        id,
      },
      data,
    });

    return c.json(result);
  })
  .delete("/:id", async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const { id } = c.req.param();

    const result = await db.handle.delete({
      where: {
        userId: user.id,
        id,
      },
    });

    return c.json(result);
  });
