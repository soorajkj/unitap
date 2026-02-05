import { prisma } from "@/lib/prisma";

const platforms = [
  {
    name: "X (Twitter)",
    baseUrl: "https://x.com/",
  },
  {
    name: "Instagram",
    baseUrl: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    baseUrl: "https://linkedin.com/in/",
  },
  {
    name: "GitHub",
    baseUrl: "https://github.com/",
  },
  {
    name: "YouTube",
    baseUrl: "https://youtube.com/@",
  },
  {
    name: "TikTok",
    baseUrl: "https://tiktok.com/@",
  },
  {
    name: "Facebook",
    baseUrl: "https://facebook.com/",
  },
  {
    name: "Discord",
    baseUrl: "https://discord.gg/",
  },
  {
    name: "Twitch",
    baseUrl: "https://twitch.tv/",
  },
];

async function main() {
  for (const platform of platforms) {
    await prisma.platform.upsert({
      where: { name: platform.name },
      update: {},
      create: platform,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
