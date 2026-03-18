"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Fragment } from "react";
import HandleCreateView from "@/components/[dashboard]/HandleCreateView";
import HandleEditView from "@/components/[dashboard]/HandleEditView";
import HandlesListView from "@/components/[dashboard]/HandlesListView";
import Button from "@/components/core/button";
import { useHandlesManagerStore } from "@/store/useHandlesManagerStore";

export default function CreateHandle() {
  const open = useHandlesManagerStore((s) => s.open);
  const setOpen = useHandlesManagerStore((s) => s.setOpen);
  const mode = useHandlesManagerStore((s) => s.mode);
  const selectedId = useHandlesManagerStore((s) => s.selectedId);
  const openList = useHandlesManagerStore((s) => s.openList);

  const dialog = Dialog.createHandle();

  const renderStage = () => {
    switch (mode) {
      case "list":
        return <HandlesListView />;
      case "create":
        return <HandleCreateView />;
      case "edit":
        if (!selectedId) return null;
        return <HandleEditView id={selectedId} />;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <Dialog.Trigger
        handle={dialog}
        render={
          <Button variant="secondary" size="ism" onClick={() => openList()}>
            <HugeiconsIcon icon={Add01Icon} />
          </Button>
        }
      />

      <Dialog.Root handle={dialog} open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-30 min-h-dvh bg-stone-950/40 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 z-40 -mt-8 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-50 p-6 text-gray-900 outline-1 outline-gray-200 transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 dark:outline-gray-300">
            {renderStage()}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </Fragment>
  );
}
