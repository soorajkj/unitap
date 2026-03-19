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
    "relative h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-900 shadow-xs transition-colors placeholder:text-gray-500 focus-visible:border-violet-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-50 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 placeholder:dark:text-gray-400 disabled:dark:border-gray-700 disabled:dark:bg-gray-900",
  ],
});
