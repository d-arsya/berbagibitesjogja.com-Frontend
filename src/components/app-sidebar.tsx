"use client";

import * as React from "react";

import { MenuGroup } from "@/components/MenuGroup";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  FaChartLine,
  FaHandshake,
  FaHome,
  FaMedal,
  FaWallet,
} from "react-icons/fa";
import { FaBowlFood, FaPeopleGroup } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getUser } from "@/lib/utils";
import { useState, useEffect } from "react";
// This is sample data.
const data = {
  menus: [
    {
      name: "Beranda",
      url: "/b/dashboard",
      icon: FaHome,
    },
    {
      name: "Relawan",
      url: "/b/volunteer",
      icon: FaPeopleGroup,
    },
    {
      name: "Distribusi Makanan",
      url: "/b/distribusi",
      icon: FaBowlFood,
    },
    {
      name: "Mitra",
      url: "/b/mitra",
      icon: FaHandshake,
    },
    {
      name: "Food Heroes",
      url: "/b/heroes",
      icon: FaMedal,
    },
    {
      name: "Kas & Bank",
      url: "/b/keuangan",
      icon: FaWallet,
    },
  ],
  menus2: [
    {
      name: "Laporan",
      url: "/b/laporan",
      icon: FaChartLine,
    },
    {
      name: "Pengaturan",
      url: "/b/pengaturan",
      icon: IoMdSettings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = useState<{
    name: string;
    phone: string;
    email: string;
    role: string;
    avatar: string;
  }>({
    name: "string",
    phone: "string",
    email: "string",
    role: "string",
    avatar: "string",
  });

  useEffect(() => {
    async function loadUser() {
      const u: {
        name: string;
        phone: string;
        email: string;
        role: string;
        avatar: string;
      } = (await getUser()) || {
        name: "string",
        phone: "string",
        email: "string",
        role: "string",
        avatar: "string",
      };
      setUser(u);
    }
    loadUser();
  }, []);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} /> */}
        <MenuGroup name={"Main"} menus={data.menus} />
        <MenuGroup name={"Manajemen"} menus={data.menus2} />
      </SidebarContent>
      <SidebarFooter>{user && <NavUser user={user} />}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
