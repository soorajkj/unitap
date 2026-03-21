"use client";

import { useIsClient } from "usehooks-ts";
import Share from "@/components/[dashboard]/Share";
import IPhoneMockup from "./IPhoneMockup";

export default function Previewer() {
  const isMounted = useIsClient();

  if (!isMounted) return null;

  return (
    <div className="flex size-full flex-col">
      <div className="h-auto w-full">
        <div className="flex h-14 items-center justify-center">
          <Share />
        </div>
      </div>
      <div className="grid flex-1 place-content-center overflow-y-auto">
        <IPhoneMockup />
      </div>
    </div>
  );
}
