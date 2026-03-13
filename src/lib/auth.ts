import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { openAPI } from "better-auth/plugins";
import { prisma } from "@/lib/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },

  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          const baseUsername = user.email
            .split("@")[0]
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");
          let username = baseUsername;
          let counter = 1;

          while (await prisma.profile.findUnique({ where: { username } })) {
            username = `${baseUsername}${counter}`;
            counter++;
          }

          await prisma.profile.create({
            data: {
              userId: user.id,
              username,
              title: user.name,
            },
          });
        },
      },
    },
  },
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60, // Cache duration in seconds
    },
  },
  plugins: [openAPI(), nextCookies()],
});
