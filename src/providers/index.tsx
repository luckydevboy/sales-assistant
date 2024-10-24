"use client";

import { ReactNode } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";

import { SidebarProvider } from "@/components/ui";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <DirectionProvider dir="rtl">
      <SidebarProvider>{children}</SidebarProvider>
    </DirectionProvider>
  );
};

export default Providers;
