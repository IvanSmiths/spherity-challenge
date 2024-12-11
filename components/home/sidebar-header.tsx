import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar/sidebar";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbWrapper } from "@/components/ui/breadcrumb/breadcrumb-wrapper";
import { Button } from "@/components/ui/button";

type CertificationFile = {
  fileUrl: string;
  fileName: string;
};

type CredentialSubject = {
  certificationFiles: CertificationFile[];
};

type BatteryData = {
  credentialSubject: CredentialSubject;
};

type SidebarHeaderProps = {
  battery: BatteryData[];
};

export default function SidebarHeader({ battery }: SidebarHeaderProps) {
  const fileUrl = battery[1].credentialSubject.certificationFiles[0].fileUrl;
  const fileName = battery[1].credentialSubject.certificationFiles[0].fileName;
  return (
    <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <BreadcrumbWrapper />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="default">
          <a href={fileUrl} target="_blank" rel="noreferrer">
            {fileName}
          </a>
        </Button>
      </div>
    </header>
  );
}
