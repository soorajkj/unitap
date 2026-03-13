import { zValidator } from "@hono/zod-validator";
import { authMiddleware } from "@/api/middlewares/auth.middleware";
import { profileMiddleware } from "@/api/middlewares/profile.middleware";
import { hono } from "@/lib/hono";
import {
  createHandleSchema,
  reorderHandlesSchema,
  updateHandleSchema,
} from "@/utils/validators/handles";

export const handlesRoute = hono
  .createApp()
  .use(authMiddleware)
  .use(profileMiddleware)
  .get("/", async (c) => {
    const db = c.get("prisma");
    const profileId = c.get("profileId");

    const handles = await db.handle.findMany({
      where: { profileId },
      include: { platform: true },
      orderBy: { order: "asc" },
    });

    return c.json(handles);
  })
  .post("/", zValidator("json", createHandleSchema), async (c) => {
    const db = c.get("prisma");
    const profileId = c.get("profileId");
    const json = c.req.valid("json");

    const firstLink = await db.handle.findFirst({
      where: { profileId },
      orderBy: [{ order: "asc" }, { id: "asc" }],
      select: { order: true },
    });

    const newOrder = firstLink ? firstLink.order - 1 : 0;

    const handle = await db.handle.create({
      data: {
        profileId,
        order: newOrder,
        ...json,
      },
    });

    return c.json(handle);
  })
  .patch("/reorder", zValidator("json", reorderHandlesSchema), async (c) => {
    const db = c.get("prisma");
    const profileId = c.get("profileId");
    const json = c.req.valid("json");

    await db.$transaction(
      json.platformIds.map((platformId, index) =>
        db.handle.update({
          where: {
            profileId_platformId: {
              platformId,
              profileId,
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
    const profileId = c.get("profileId");
    const { id } = c.req.param();

    const handle = await db.handle.findFirst({
      where: {
        id,
        profileId,
      },
      include: { platform: true },
    });

    return c.json(handle);
  })
  .patch("/:id", zValidator("json", updateHandleSchema), async (c) => {
    const db = c.get("prisma");
    const profileId = c.get("profileId");
    const { id } = c.req.param();
    const data = c.req.valid("json");

    const handle = await db.handle.update({
      where: {
        id,
        profileId,
      },
      data,
    });

    return c.json(handle);
  })
  .delete("/:id", async (c) => {
    const db = c.get("prisma");
    const profileId = c.get("profileId");
    const { id } = c.req.param();

    const handle = await db.handle.delete({
      where: {
        id,
        profileId,
      },
    });

    return c.json(handle);
  });
