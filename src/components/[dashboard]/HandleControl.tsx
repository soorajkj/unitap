"use client";

import { useSortable } from "@dnd-kit/sortable";
import { DragDropVerticalIcon, Pen01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Button from "@/components/core/button";
import type { Handle } from "@/types/response";

interface HandleControlProps {
  handle: Handle;
}

export default function HandleControl({ handle }: HandleControlProps) {
  const { listeners, setActivatorNodeRef, attributes } = useSortable({
    id: handle.id,
  });

  return (
    <div ref={setActivatorNodeRef} className="relative">
      <div className="flex w-full items-center gap-px">
        <Button {...listeners} {...attributes} variant="secondary" size="ism">
          <HugeiconsIcon icon={DragDropVerticalIcon} />
        </Button>
        <div className="flex w-full gap-4 rounded-xl p-3">
          <div className="flex flex-1 items-center gap-2">
            <div className="flex size-8 items-center justify-center">
              <div className="size-full rounded-md"></div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="font-semibold">{handle.platform.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="secondary" size="ism">
              <HugeiconsIcon icon={Pen01Icon} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
