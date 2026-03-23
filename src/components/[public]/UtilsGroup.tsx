import { Button } from "@base-ui/react";
import {
  Copy01Icon,
  NotificationBubbleIcon,
  Share08Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function UtilsGroup() {
  return (
    <div className="flex w-full items-center gap-2">
      <Button className="relative inline-flex aspect-square size-10 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent bg-white text-base leading-none whitespace-nowrap text-neutral-950 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
        <HugeiconsIcon icon={NotificationBubbleIcon} strokeWidth={2} />
      </Button>
      <Button className="relative inline-flex h-10 w-full shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent bg-white px-3 py-2 text-base leading-none whitespace-nowrap text-neutral-950 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
        hey@sarahgreen.com <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
      </Button>
      <Button className="relative inline-flex aspect-square size-10 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent bg-white text-base leading-none whitespace-nowrap text-neutral-950 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
        <HugeiconsIcon icon={Share08Icon} strokeWidth={2} />
      </Button>
    </div>
  );
}
