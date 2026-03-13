"use client";

import { Button } from "@base-ui/react";
import { Avatar } from "@base-ui/react/avatar";
import { Dialog } from "@base-ui/react/dialog";
import { Cancel01Icon, Edit03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
// import HandlesManager from "@/components/[dashboard]/HandlesManager";
import ProfileEditForm from "@/components/[dashboard]/ProfileEditForm";
import { useProfileQuery } from "@/hooks/useProfilesQuery";

export default function ProfileManager() {
  const { data: profile } = useProfileQuery();
  const [open, setOpen] = useState(false);

  const profileEditdialog = Dialog.createHandle();

  const handleClose = () => setOpen(false);

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
      <div className="flex w-full flex-col gap-1">
        <Dialog.Trigger
          handle={profileEditdialog}
          render={
            <Button
              onClick={() => setOpen(true)}
              className="relative inline-flex aspect-square h-8 w-fit shrink cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-transparent bg-transparent font-semibold text-base text-stone-950 transition hover:bg-stone-100 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-neutral-400"
            >
              Title
              <HugeiconsIcon icon={Edit03Icon} strokeWidth={1.5} />
            </Button>
          }
        />
        <Dialog.Root
          handle={profileEditdialog}
          open={open}
          onOpenChange={setOpen}
        >
          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 z-30 min-h-dvh bg-stone-950/40 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute" />
            <Dialog.Popup className="-mt-8 -translate-x-1/2 -translate-y-1/2 fixed top-1/2 left-1/2 z-40 w-full max-w-md rounded-2xl bg-gray-50 p-6 text-gray-900 outline-1 outline-gray-200 transition-all duration-150 data-ending-style:scale-90 data-starting-style:scale-90 data-ending-style:opacity-0 data-starting-style:opacity-0 dark:outline-gray-300">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <Dialog.Title className="font-medium text-base">
                    Update profile
                  </Dialog.Title>
                  <Dialog.Close className="relative inline-flex aspect-square size-7 shrink cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-transparent text-xs leading-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
                    <HugeiconsIcon icon={Cancel01Icon} />
                  </Dialog.Close>
                </div>
                <ProfileEditForm profile={profile} onClose={handleClose} />
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
        {/* <HandlesManager /> */}
      </div>
    </div>
  );
}
