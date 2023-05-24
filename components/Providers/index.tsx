"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider enableSystem attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
