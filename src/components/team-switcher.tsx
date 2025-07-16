"use client";

import * as React from "react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-navy text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            {/* <Instagram className="size-4" /> */}
            <Image
              src={"/plain-logo-white.png"}
              width={20}
              height={20}
              alt="BBJ Logo"
            />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="font-semibold text-xl">Berbagi Bites Jogja</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
