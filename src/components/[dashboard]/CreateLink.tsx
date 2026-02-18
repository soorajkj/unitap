"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import CreateLinkForm from "@/components/[dashboard]/CreateLinkForm";
import Button from "@/components/core/button";

export default function CreateLink() {
  return (
    <Dialog.Root>
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
          <Dialog.Title className="-mt-1.5 mb-1 font-medium text-lg">
            Notifications
          </Dialog.Title>
          <Dialog.Description className="mb-6 text-base text-gray-600">
            You are all caught up. Good job!
          </Dialog.Description>
          <CreateLinkForm />
          <div className="flex justify-end gap-4">
            <Dialog.Close className="focus-visible:-outline-offset-1 flex h-8 select-none items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-3.5 font-medium text-base text-gray-900 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-blue-800 active:bg-gray-100">
              Close
            </Dialog.Close>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
