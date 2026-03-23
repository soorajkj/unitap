"use client";

import { useSortable } from "@dnd-kit/sortable";
import { DragDropVerticalIcon, Pen01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Button from "@/components/core/button";
import { useHandleUpdateMutation } from "@/hooks/useHandlesMutation";
import { useHandlesManagerStore } from "@/store/useHandlesManagerStore";
import type { Handle } from "@/types/response";
import { PLATFORM_ICONS, type PlatformIconKey } from "@/utils/icons";
import Switch from "../core/switch";

interface HandleControlProps {
  handle: Handle;
}

export default function HandleControl({ handle }: HandleControlProps) {
  const openEdit = useHandlesManagerStore((s) => s.openEdit);
  const { listeners, setActivatorNodeRef, attributes } = useSortable({
    id: handle.id,
  });
  const updateHandleMutation = useHandleUpdateMutation();

  const icon = handle.platform.icon as PlatformIconKey;

  return (
    <div ref={setActivatorNodeRef} className="relative">
      <div className="flex w-full items-center gap-px">
        <Button {...listeners} {...attributes} variant="secondary" size="ism">
          <HugeiconsIcon icon={DragDropVerticalIcon} />
        </Button>
        <div className="flex w-full gap-2">
          <div className="flex flex-1 items-center gap-2 overflow-hidden rounded-xl p-2.5 hover:bg-neutral-200/50">
            <div className="flex size-6 items-center justify-center">
              <div className="rounded-md [&_svg]:size-5">
                <HugeiconsIcon icon={PLATFORM_ICONS[icon]} strokeWidth={2} />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-base font-semibold">{handle.platform.name}</p>
            </div>
            <Button
              variant="secondary"
              size="ism"
              onClick={() => openEdit(handle.id)}
            >
              <HugeiconsIcon icon={Pen01Icon} />
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Switch
              checked={!handle.archive}
              disabled={updateHandleMutation.isPending}
              onCheckedChange={() =>
                updateHandleMutation.mutate({
                  id: handle.id,
                  data: { archive: !handle.archive },
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
