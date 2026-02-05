"use client";

import { Button as ButtonPrimitives } from "@base-ui/react/button";
import { cn, tv, type VariantProps } from "tailwind-variants";

interface ButtonProps
  extends ButtonPrimitives.Props,
    VariantProps<typeof buttonStyles> {}

export default function Button({
  variant,
  size,
  className,
  ...rest
}: ButtonProps) {
  return (
    <ButtonPrimitives
      data-slot="button"
      className={cn(buttonStyles({ variant, size }), className)}
      {...rest}
    />
  );
}

const buttonStyles = tv({
  base: [
    "relative inline-flex w-full shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-transparent px-3 py-2 font-medium text-sm leading-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      primary: "bg-blue-500 text-white hover:bg-blue-400",
    },
    size: {
      sm: "[&_svg]:size-3.5",
      md: "[&_svg]:size-3.5",
      lg: "[&_svg]:size-3.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
