import { authMiddleware } from "@/api/middlewares/auth.middleware";
import { hono } from "@/lib/hono";

export const platformsRoute = hono
  .createApp()
  .use(authMiddleware)
  .get("/", async (c) => {
    const db = c.get("prisma");
    const platforms = await db.platform.findMany({
      where: { archive: false },
    });
    return c.json(platforms);
  });
