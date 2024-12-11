import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar/sidebar";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbWrapper } from "@/components/ui/breadcrumb/breadcrumb-wrapper";

export default function SidebarHeader() {
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <BreadcrumbWrapper />
    </header>
  );
}
