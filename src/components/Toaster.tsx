"use client";

import { useTheme } from "next-themes";
import { Toaster as SonnerToaster, type ToasterProps } from "sonner";

export default function Toaster({ ...props }: ToasterProps) {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme as ToasterProps["theme"];

  return <SonnerToaster theme={theme} {...props} />;
}
