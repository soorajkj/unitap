"use client";

import { Button } from "@base-ui/react/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { useHandlesQuery } from "@/hooks/useHandlesQuery";
import { usePlatformsQuery } from "@/hooks/usePlatformsQuery";
import { useHandlesManagerStore } from "@/store/useHandlesManagerStore";
import { PLATFORM_ICONS, type PlatformIconKey } from "@/utils/icons";

export default function HandlesDisplay() {
  const { data: handles } = useHandlesQuery();
  const { data: platforms } = usePlatformsQuery();
  const activeHandles = handles.filter((h) => !h.archive);
  const openEdit = useHandlesManagerStore((s) => s.openEdit);
  const openCreate = useHandlesManagerStore((s) => s.openCreate);

  if (!activeHandles.length) {
    return (
      <div className="flex items-center gap-2">
        {platforms.slice(0, 4).map((platform) => {
          const icon = platform.icon as PlatformIconKey;
          return (
            <Button
              key={platform.id}
              onClick={() => openCreate()}
              className="relative inline-flex aspect-square size-7 shrink cursor-pointer items-center justify-center gap-1 rounded-full border border-dashed border-neutral-300 bg-neutral-50 text-sm whitespace-nowrap text-neutral-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
            >
              <HugeiconsIcon icon={PLATFORM_ICONS[icon]} strokeWidth={2} />
            </Button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      {activeHandles.map((handle) => {
        const icon = handle.platform.icon as PlatformIconKey;
        return (
          <Button
            key={handle.id}
            onClick={() => openEdit(handle.id)}
            className="relative inline-flex aspect-square size-7 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent bg-transparent text-sm whitespace-nowrap text-stone-500 transition hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0"
          >
            <HugeiconsIcon icon={PLATFORM_ICONS[icon]} strokeWidth={2} />
          </Button>
        );
      })}
    </div>
  );
}
