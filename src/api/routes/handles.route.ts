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

    const handle = await db.handle.create({
      data: {
        userId: user.id,
        platformId: json.platformId,
        url: json.url,
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
  .patch("/:id", zValidator("json", updateHandleSchema), async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const { id } = c.req.param();

    const result = await db.handle.updateMany({
      where: {
        userId: user.id,
        id,
      },
      data: {
        archive: true,
      },
    });

    return c.json(result);
  })
  .delete("/:id", async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const { id } = c.req.param();

    const result = await db.handle.updateMany({
      where: {
        userId: user.id,
        id,
      },
      data: {
        archive: true,
      },
    });

    return c.json(result);
  });
