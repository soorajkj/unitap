import { Input as InputPrimitive } from "@base-ui/react/input";
import { cn, tv, VariantProps } from "tailwind-variants";

interface InputProps
  extends InputPrimitive.Props, VariantProps<typeof inputStyles> {}

export default function Input({
  type = "text",
  className,
  ...props
}: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputStyles(), className)}
      {...props}
    />
  );
}

const inputStyles = tv({
  base: [
    "relative h-10 w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-900 shadow-xs transition-colors placeholder:text-neutral-500 focus-visible:border-violet-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-neutral-300 disabled:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 placeholder:dark:text-neutral-400 disabled:dark:border-neutral-700 disabled:dark:bg-neutral-900",
  ],
});
