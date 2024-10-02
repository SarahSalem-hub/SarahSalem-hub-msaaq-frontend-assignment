"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class"  >
       <div className="bg-lightBg dark:bg-darkBg min-h-screen">
      {children}
      </div>
    </ThemeProvider>
  );
}
