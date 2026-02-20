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
        "flex select-none items-center gap-2 font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
