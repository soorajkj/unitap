import { prisma } from "@/lib/prisma";
import type { PlatformIconKey } from "@/utils/icons";

type Platform = {
  name: string;
  baseUrl: string;
  icon: PlatformIconKey;
};

const platforms: Platform[] = [
  {
    name: "X (Twitter)",
    baseUrl: "https://x.com/",
    icon: "twitter",
  },
  {
    name: "Instagram",
    baseUrl: "https://instagram.com/",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    baseUrl: "https://linkedin.com/in/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    baseUrl: "https://github.com/",
    icon: "github",
  },
  {
    name: "YouTube",
    baseUrl: "https://youtube.com/@",
    icon: "youtube",
  },
  {
    name: "TikTok",
    baseUrl: "https://tiktok.com/@",
    icon: "tiktok",
  },
  {
    name: "Facebook",
    baseUrl: "https://facebook.com/",
    icon: "facebook",
  },
  {
    name: "Discord",
    baseUrl: "https://discord.gg/",
    icon: "discord",
  },
  {
    name: "Twitch",
    baseUrl: "https://twitch.tv/",
    icon: "twitch",
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
