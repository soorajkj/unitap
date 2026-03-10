"use client";

import { Dialog } from "@base-ui/react";
import { Add01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import HandlesSortableList from "@/components/[dashboard]/HandlesSortableList";
import Button from "@/components/core/button";
import { useHandlesManagerStore } from "@/store/useHandlesManagerStore";

export default function HandlesListView() {
  const openCreate = useHandlesManagerStore((s) => s.openCreate);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <div className="size-7"></div>
        <Dialog.Title className="font-medium text-base">
          Manage Handles
        </Dialog.Title>
        <Dialog.Close className="relative inline-flex aspect-square size-7 shrink cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-transparent text-xs leading-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
          <HugeiconsIcon icon={Cancel01Icon} />
        </Dialog.Close>
      </div>
      <div className="flex flex-col space-y-1">
        <h2 className="font-semibold text-base text-black">
          Show visitors where to find you
        </h2>
        <p className="text-base">
          Add your social media profiles and more as linked icons on your
          Unitap.
        </p>
      </div>

      <HandlesSortableList />
      <Button onClick={openCreate} size="sm">
        <HugeiconsIcon icon={Add01Icon} />
        Add New
      </Button>
    </div>
  );
}
