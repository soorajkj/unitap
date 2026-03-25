import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import type { Public } from "@/types/response";
import { PLATFORM_ICONS, type PlatformIconKey } from "@/utils/icons";

export default function Handles({ data }: { data: Public }) {
  if (!data?.handles.length) return null;

  return (
    <ul className="flex items-center justify-center gap-2">
      {data?.handles.map((handle) => {
        const icon = PLATFORM_ICONS[handle.platform.icon as PlatformIconKey];
        return (
          <li key={handle.id} className="relative aspect-square size-12">
            <Link
              href="/"
              aria-label={handle.platform.name}
              className="relative flex size-full flex-col items-center justify-center overflow-hidden"
            >
              <div className="relative flex size-6 items-center justify-center">
                <HugeiconsIcon icon={icon} className="size-full text-white" />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
