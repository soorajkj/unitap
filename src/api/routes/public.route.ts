import { hono } from "@/lib/hono";

export const publicRoute = hono.createApp().get("/:username", async (c) => {
  const db = c.get("prisma");
  const { username } = c.req.param();

  const profile = await db.user.findFirst({
    where: { username },
    include: {
      profile: true,
      links: true,
      handles: {
        include: {
          platform: true,
        },
      },
    },
  });

  return c.json(profile);
});
