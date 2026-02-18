"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Button from "@/components/core/button";
import { useHandlesQuery } from "@/hooks/useHandlesQuery";
import { PLATFORM_ICONS, type PlatformIconKey } from "@/utils/icons";

export default function HandlesDisplay() {
  const { data: handles } = useHandlesQuery();

  return (
    <div className="flex items-center gap-2">
      {handles.map((handle) => {
        const icon = handle.platform.icon as PlatformIconKey;
        return (
          <BaseButton
            key={handle.id}
            className="relative inline-flex aspect-square size-7 shrink cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-transparent bg-transparent text-sm text-stone-500 transition hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0"
          >
            <HugeiconsIcon icon={PLATFORM_ICONS[icon]} strokeWidth={2} />
          </BaseButton>
        );
      })}
      <Button variant="primary" size="ism">
        <HugeiconsIcon icon={Add01Icon} />
      </Button>
    </div>
  );
}
