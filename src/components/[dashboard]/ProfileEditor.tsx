import { Avatar } from "@base-ui/react/avatar";
import { CheckmarkBadge02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import HandlesManager from "@/components/[dashboard]/HandlesManager";

export default function ProfileEditor() {
  return (
    <div className="flex h-auto w-full items-start gap-4">
      <div className="relative">
        <Avatar.Root className="flex aspect-square size-16">
          <Avatar.Image src="" className="size-full" />
          <Avatar.Fallback className="inline-flex size-full items-center justify-center rounded-full bg-violet-500 font-medium text-2xl text-white">
            SG
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full flex-col space-y-1">
          <h3 className="flex items-center gap-1 font-medium text-lg text-stone-950 leading-none [&_svg]:size-5 [&_svg]:fill-blue-500 [&_svg]:text-white">
            Sarah Green <HugeiconsIcon icon={CheckmarkBadge02Icon} />
          </h3>
        </div>
        <HandlesManager />
      </div>
    </div>
  );
}
