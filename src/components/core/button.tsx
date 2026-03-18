"use client";

import { Button as ButtonPrimitives } from "@base-ui/react/button";
import { cn, tv, type VariantProps } from "tailwind-variants";

interface ButtonProps
  extends ButtonPrimitives.Props, VariantProps<typeof buttonStyles> {}

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
    "relative inline-flex shrink cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg border border-transparent leading-none transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-20 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      primary: "bg-violet-600 text-white hover:bg-violet-500",
      secondary: "bg-transparent text-stone-600 hover:bg-stone-100",
      destructive: "bg-red-600 text-white hover:bg-red-500",
    },
    size: {
      sm: "h-7 px-2 py-1 text-xs [&_svg]:size-3.5",
      md: "h-8 px-3 py-2 text-sm [&_svg]:size-3.5",
      lg: "h-9 px-3 py-2 text-base [&_svg]:size-3.5",
      ism: "aspect-square size-7 text-xs [&_svg]:size-3.5",
      imd: "aspect-square size-8 text-sm [&_svg]:size-3.5",
      ilg: "aspect-square size-9 text-base [&_svg]:size-3.5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
