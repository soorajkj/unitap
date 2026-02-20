"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Add01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import CreateLinkForm from "@/components/[dashboard]/CreateLinkForm";
import Button from "@/components/core/button";

export default function CreateLink() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger
        render={
          <Button>
            <HugeiconsIcon icon={Add01Icon} />
            <span>Add</span>
          </Button>
        }
      />
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-30 min-h-dvh bg-black opacity-20 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute dark:opacity-70" />
        <Dialog.Popup className="-mt-8 -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-40 w-full max-w-96 rounded-lg bg-gray-50 p-6 text-gray-900 outline-1 outline-gray-200 transition-all duration-150 data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:outline-gray-300">
          <div className="flex w-full items-start gap-2">
            <div className="mb-4 flex flex-1 flex-col">
              <Dialog.Title className="font-medium text-base">
                Notifications
              </Dialog.Title>
              <Dialog.Description className="text-base text-gray-600">
                You are all caught up. Good job!
              </Dialog.Description>
            </div>
            <Dialog.Close className="relative inline-flex aspect-square size-8 shrink cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-transparent text-xs leading-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
              <HugeiconsIcon icon={Cancel01Icon} />
            </Dialog.Close>
          </div>
          <CreateLinkForm handleClose={handleClose} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
