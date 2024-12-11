import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar/sidebar";
import * as React from "react";

const data = {
  navMain: [
    {
      title: "Battery",
      url: "#",
      items: [
        {
          title: "Battery Section",
          url: "#",
        },
        {
          title: "Info",
          url: "#BatteryInfo",
        },
      ],
    },
    {
      title: "Materials",
      url: "#Materials",
      items: [
        {
          title: "Materials Section",
          url: "#Materials",
        },
        {
          title: "Active Materials",
          url: "#Active Materials",
        },
        {
          title: "Electrolyte Composition",
          url: "#Electrolyte Composition",
        },
      ],
    },
    {
      title: "Charts",
      url: "#",
      items: [
        {
          title: "Charts Section",
          url: "#Charts",
        },
        {
          title: "Active Materials Charts",
          url: "#Active MaterialsChart",
        },
        {
          title: "Electrolyte Composition",
          url: "#Electrolyte CompositionChart",
        },
      ],
    },
    {
      title: "Performance",
      url: "#Performance Metrics",
      items: [
        {
          title: "Performance Section",
          url: "#Performance Metrics",
        },
      ],
    },
    {
      title: "More data",
      url: "#More Data",
      items: [
        {
          title: "More Data Section",
          url: "#More Data",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex h-16 justify-center">
        <span className="pl-2 text-3xl font-bold">Vera</span>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
