import {
  DiscordIcon,
  Facebook02Icon,
  GithubIcon,
  InstagramIcon,
  Linkedin02Icon,
  NewTwitterIcon,
  TiktokIcon,
  TwitchIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";

export const PLATFORM_ICONS = {
  twitter: NewTwitterIcon,
  instagram: InstagramIcon,
  linkedin: Linkedin02Icon,
  github: GithubIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
  facebook: Facebook02Icon,
  discord: DiscordIcon,
  twitch: TwitchIcon,
} as const;

export type PlatformIconKey = keyof typeof PLATFORM_ICONS;
