import type { User } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const generateUsername = async (user: User) => {
  const base = user.email
    .split("@")[0]
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  let username = base;
  let counter = 1;
  const title = user.name || "";

  while (await prisma.profile.findUnique({ where: { username } })) {
    username = base + counter;
    counter++;
  }

  await prisma.profile.create({
    data: {
      userId: user.id,
      title,
      username,
    },
  });
};
