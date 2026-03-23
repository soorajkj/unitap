"use client";

import { Button } from "@base-ui/react/button";
import Input from "@/components/core/input";
import { Popover } from "@base-ui/react/popover";
import { Copy01Icon, Globe02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";
import QRCode from "@/components/[dashboard]/QRCode";
import { useProfileQuery } from "@/hooks/useProfilesQuery";

export default function Share() {
  const [_, copy] = useCopyToClipboard();
  const { data: profile } = useProfileQuery();

  const username = profile?.username;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${username}`;

  const handleCopyLink = async () => {
    try {
      await copy(url);
      toast.success("Link copied to clipboard");
    } catch (error) {
      console.log(error);
      toast.error("Failed to copy link");
    }
  };

  return (
    <Popover.Root>
      <Popover.Trigger className="relative inline-flex h-9 shrink cursor-pointer items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm whitespace-nowrap text-neutral-900 transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0">
        <span className="inline-block w-full max-w-60 truncate">Share</span>
        <HugeiconsIcon icon={Globe02Icon} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Backdrop />
        <Popover.Positioner sideOffset={12} className="isolate z-50">
          <Popover.Popup className="data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 data-closed:animate-out data-open:animate-in z-50 flex w-96 origin-(--transform-origin) flex-col gap-2.5 rounded-2xl bg-white p-6 text-sm shadow outline-hidden duration-100">
            <Popover.Title className="text-base font-medium">
              Share
            </Popover.Title>
            <div className="grid gap-4">
              <div className="flex items-center gap-1">
                <Input
                  readOnly={true}
                  defaultValue={url}
                  className="file:text-foreground aria-invalid:border-destructive aria-invalid:ring-destructive/20 h-9 w-full min-w-0 truncate rounded-lg border border-neutral-100 bg-transparent px-2.5 py-1 text-base transition-colors outline-none selection:bg-violet-500 selection:text-white file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 read-only:bg-neutral-50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:opacity-50 aria-invalid:ring-3 md:text-sm"
                />
                <Button
                  onClick={() => handleCopyLink()}
                  className="relative inline-flex aspect-square h-9 shrink cursor-pointer items-center justify-center gap-3 rounded-lg border border-transparent bg-neutral-800 text-sm whitespace-nowrap text-white transition hover:bg-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
                >
                  <HugeiconsIcon icon={Copy01Icon} />
                </Button>
              </div>
              <QRCode />
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
