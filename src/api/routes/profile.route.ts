import { zValidator } from "@hono/zod-validator";
import { authMiddleware } from "@/api/middlewares/auth.middleware";
import { hono } from "@/lib/hono";
import {
  profileCreateSchema,
  profileUpdateSchema,
} from "@/utils/validators/profile";

export const profileRoute = hono
  .createApp()
  .use(authMiddleware)
  .get("/", async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");

    const profile = await db.profile.findFirst({
      where: {
        userId: user.id,
      },
    });

    return c.json(profile);
  })
  .post("/", zValidator("json", profileCreateSchema), async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const data = c.req.valid("json");

    const profile = await db.profile.create({
      data: {
        userId: user.id,
        ...data,
      },
    });

    return c.json(profile, 201);
  })
  .patch("/", zValidator("json", profileUpdateSchema), async (c) => {
    const db = c.get("prisma");
    const user = c.get("user");
    const data = c.req.valid("json");

    const profile = await db.profile.upsert({
      where: {
        userId: user.id,
      },
      update: data,
      create: {
        userId: user.id,
        ...data,
      },
    });

    return c.json(profile);
  });
