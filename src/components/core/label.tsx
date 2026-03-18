"use client";

import { Field as FiledPrimitive } from "@base-ui/react/field";
import { cn } from "tailwind-variants";

export default function Label({
  className,
  ...props
}: FiledPrimitive.Label.Props) {
  return (
    <FiledPrimitive.Label
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
