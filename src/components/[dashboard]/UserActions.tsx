"use client";

import { Popover } from "@base-ui/react/popover";
import { Globe02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function UserActions() {
  return (
    <Popover.Root>
      <Popover.Trigger className="relative inline-flex h-9 shrink cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full border border-neutral-200 bg-white px-4 py-2 text-neutral-900 text-sm transition hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0">
        SO
        <HugeiconsIcon icon={Globe02Icon} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Backdrop />
        <Popover.Positioner sideOffset={12} className="isolate z-50">
          <Popover.Popup className="data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 z-50 flex w-64 origin-(--transform-origin) flex-col gap-2.5 rounded-2xl bg-white p-2 text-sm shadow outline-hidden duration-100 data-closed:animate-out data-open:animate-in"></Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
