import Nabvar from "@/app/ui/Layout/Nabvar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nabvar />
      {children}
    </div>
  );
}