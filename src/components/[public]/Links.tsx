import { Button } from "@base-ui/react/button";
import { CheckmarkSquare02Icon, Copy01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { toast } from "sonner";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import type { Public } from "@/types/response";

export default function Links({ data }: { data: Public }) {
  if (!data?.links.length) return null;

  return (
    <ul className="grid w-full grid-cols-1 gap-2">
      {data.links.map((link) => (
        <LinkItems key={link.id} link={link} />
      ))}
    </ul>
  );
}

function LinkItems({ link }: { link: NonNullable<Public>["links"][number] }) {
  const [copiedText, copy] = useCopyToClipboard();

  const handleCopy = async () => {
    try {
      await copy(link.url);
      toast("Copied to clipboard");
    } catch (error) {
      console.error(error);
      toast("Failed to copy to clipboard");
    }
  };

  return (
    <li className="relative flex size-full flex-col overflow-hidden rounded-xl bg-neutral-900/80 p-4 transition-colors after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:inset-shadow-2xs after:inset-shadow-white/5 hover:bg-neutral-800">
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <p className="text-sm text-white">{link.title}</p>
          </div>
          <span className="text-xs text-neutral-400">{link.url}</span>
        </div>
        <div className="relative">
          <Button
            className="relative inline-flex aspect-square size-7 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent bg-transparent text-xs whitespace-nowrap text-neutral-400 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0"
            onClick={handleCopy}
          >
            <HugeiconsIcon
              icon={copiedText ? CheckmarkSquare02Icon : Copy01Icon}
              className="h-5 w-5"
            />
          </Button>
        </div>
      </div>
    </li>
  );
}
