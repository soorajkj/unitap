"use client";

import { usePathname } from "next/navigation";
import {
  type ThemeProviderProps,
  ThemeProvider as NextThemeProvider,
} from "next-themes";
import { useMemo } from "react";

const decideForcedTheme = (path: string) => {
  if (["/auth/signin", "/auth/signup"].includes(path)) return "light";
  return undefined;
};

export default function ThemeProvider({ ...props }: ThemeProviderProps) {
  const path = usePathname();
  const forcedTheme = useMemo(() => decideForcedTheme(path), [path]);

  return <NextThemeProvider forcedTheme={forcedTheme} {...props} />;
}
