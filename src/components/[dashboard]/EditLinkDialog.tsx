"use client";

import { Dialog } from "@base-ui/react/dialog";
import { Tooltip } from "@base-ui/react/tooltip";
import { Cancel01Icon, Edit03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import Button from "@/components/core/button";
import type { Link } from "@/types/response";
import EditLinkForm from "./EditLinkForm";

interface EditLinkDialogProps {
  link: Link;
}

export default function EditLinkDialog({ link }: EditLinkDialogProps) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Tooltip.Root>
        <Tooltip.Trigger
          delay={0}
          render={
            <Dialog.Trigger
              render={
                <Button aria-label="Edit link" variant="secondary" size="ism">
                  <HugeiconsIcon icon={Edit03Icon} />
                </Button>
              }
            />
          }
        />
        <Tooltip.Portal>
          <Tooltip.Positioner side="bottom" sideOffset={4}>
            <Tooltip.Popup className="rounded-md bg-neutral-950 px-1.5 py-1 text-xs font-medium text-white">
              <Tooltip.Arrow />
              Edit
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-30 min-h-dvh bg-black opacity-20 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute dark:opacity-70" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-40 -mt-8 w-full max-w-96 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-neutral-50 p-6 text-neutral-900 outline-1 outline-neutral-200 transition-all duration-150 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 dark:outline-neutral-300">
          <div className="absolute top-2 right-2">
            <Dialog.Close className="relative inline-flex aspect-square size-7 shrink cursor-pointer items-center justify-center gap-1 rounded-lg border border-transparent text-xs leading-none whitespace-nowrap transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-3.5 [&_svg]:shrink-0">
              <HugeiconsIcon icon={Cancel01Icon} />
            </Dialog.Close>
          </div>
          <EditLinkForm link={link} handleClose={handleClose} />
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
