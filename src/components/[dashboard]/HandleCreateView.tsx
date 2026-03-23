"use client";

import { Dialog } from "@base-ui/react";
import { ArrowLeft01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import HandleCreateForm from "@/components/[dashboard]/HandleCreateForm";
import Button from "@/components/core/button";
import { useHandlesManagerStore } from "@/store/useHandlesManagerStore";

export default function HandleListView() {
  const openList = useHandlesManagerStore((s) => s.openList);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <Button variant="secondary" size="ism" onClick={openList}>
          <HugeiconsIcon icon={ArrowLeft01Icon} />
        </Button>
        <Dialog.Title className="text-base font-medium">
          Create Handle
        </Dialog.Title>
        <Dialog.Close className="relative inline-flex aspect-square size-7 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent text-xs leading-none whitespace-nowrap transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          <HugeiconsIcon icon={Cancel01Icon} />
        </Dialog.Close>
      </div>
      <HandleCreateForm handleClose={openList} />
    </div>
  );
}
