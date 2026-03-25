import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Profile } from "@/types/response";
import { Button } from "@base-ui/react";
import {
  CheckmarkSquare02Icon,
  Copy01Icon,
  NotificationBubbleIcon,
  Share08Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { toast } from "sonner";

export default function UtilsGroup({ data }: { data: Profile }) {
  const [copiedText, copy] = useCopyToClipboard();

  const username = data?.username;
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${username}`;

  const handleCopy = async () => {
    try {
      await copy(url);
      toast("Copied to clipboard");
    } catch (error) {
      console.error(error);
      toast("Failed to copy to clipboard");
    }
  };

  return (
    <div className="flex w-full items-center gap-2">
      <Button
        aria-label="Notifications"
        className="relative inline-flex aspect-square size-10 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent bg-white text-base leading-none whitespace-nowrap text-neutral-950 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      >
        <HugeiconsIcon icon={NotificationBubbleIcon} strokeWidth={2} />
      </Button>
      <Button
        className="relative inline-flex h-10 w-full shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent bg-white px-3 py-2 text-base leading-none whitespace-nowrap text-neutral-950 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
        onClick={handleCopy}
      >
        {`@${data?.username}`}
        <HugeiconsIcon
          icon={copiedText ? CheckmarkSquare02Icon : Copy01Icon}
          strokeWidth={2}
        />
      </Button>
      <Button
        aria-label="Share"
        className="relative inline-flex aspect-square size-10 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent bg-white text-base leading-none whitespace-nowrap text-neutral-950 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
      >
        <HugeiconsIcon icon={Share08Icon} strokeWidth={2} />
      </Button>
    </div>
  );
}
