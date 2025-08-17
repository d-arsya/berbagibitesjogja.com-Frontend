"use client";
import { Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SidebarTrigger } from "./ui/sidebar";
import { getUser } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function SidebarHeader({
  notifications,
}: {
  notifications: { text: string }[];
}) {
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
    <header className="flex shadow-md rounded-md h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 sticky top-0 bg-white z-100">
      <div className="flex justify-between w-full items-center pe-6">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <h1 className="font-semibold text-sm md:text-2xl">
            Selamat datang, {user ? user.name : "..."}!
          </h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="relative">
            <Bell className="w-6" />
            <span className="bg-red-500 p-.5 w-4 rounded-full absolute -top-1 -right-1 text-white font-medium text-xs">
              {notifications.length}
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {notifications.map((e, i) => (
              <DropdownMenuItem key={i}>{e.text}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
