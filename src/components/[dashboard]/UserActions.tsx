"use client";

import { Menu } from "@base-ui/react/menu";
import { Logout05Icon, UserIcon, Zap } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useRouter } from "next/navigation";
import { useIsClient } from "usehooks-ts";
import { authClient } from "@/lib/authClient";
import { getQueryClient } from "@/lib/queryClient";

export default function UserActions() {
  const router = useRouter();
  const isMounted = useIsClient();
  const queryClient = getQueryClient();
  const { data: session } = authClient.useSession();

  if (!isMounted) return null;

  const handleSignout = async () => {
    await authClient.signOut();
    queryClient.clear();
    router.push("/auth/signin");
  };

  return (
    <Menu.Root>
      <Menu.Trigger className="relative inline-flex w-full shrink cursor-pointer items-center gap-2 rounded-full border border-transparent bg-neutral-50 px-2 py-2 text-sm whitespace-nowrap text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0">
        <div className="size-6 rounded-full bg-neutral-300 [&_svg]:size-full">
          <svg
            width={145}
            height={144}
            viewBox="0 0 145 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>{}</title>
            <g clipPath="url(#clip0_9223_11443)">
              <g clipPath="url(#clip1_9223_11443)">
                <rect width={145} height={146} fill="#A8AAA2" />
                <circle cx="72.396" cy="53.896" r="31.396" fill="#F6F7F5" />
                <ellipse
                  cx="72.5"
                  cy="150.5"
                  rx="63.5"
                  ry={59}
                  fill="#F6F7F5"
                />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_9223_11443">
                <rect x="0.5" width={144} height={144} rx={72} fill="white" />
              </clipPath>
              <clipPath id="clip1_9223_11443">
                <rect width={145} height={146} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span className="max-w-32 truncate font-medium">
          {session?.user.email}
        </span>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Backdrop />
        <Menu.Positioner sideOffset={4} className="isolate z-50">
          <Menu.Popup className="data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 data-closed:animate-out data-open:animate-in z-50 flex w-60 origin-(--transform-origin) flex-col rounded-2xl bg-white p-1 text-sm shadow outline-hidden duration-100">
            <Menu.Item className="relative inline-flex w-full shrink cursor-pointer items-center gap-2 rounded-full border border-transparent bg-neutral-50 px-2 py-1.5 text-sm font-medium whitespace-nowrap text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0">
              <HugeiconsIcon icon={UserIcon} strokeWidth={1.8} />
              <span>Account</span>
            </Menu.Item>
            <Menu.Item className="relative inline-flex w-full shrink cursor-pointer items-center gap-2 rounded-full border border-transparent bg-neutral-50 px-2 py-1.5 text-sm font-medium whitespace-nowrap text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0">
              <HugeiconsIcon icon={Zap} strokeWidth={1.8} />
              <span>Upgrade</span>
            </Menu.Item>
            <Menu.Item
              className="relative inline-flex w-full shrink cursor-pointer items-center gap-2 rounded-full border border-transparent bg-neutral-50 px-2 py-1.5 text-sm font-medium whitespace-nowrap text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0"
              onClick={handleSignout}
            >
              <HugeiconsIcon icon={Logout05Icon} strokeWidth={1.8} />
              <span>Sign out</span>
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
