import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import SidebarHeader from "./SidebarHeader";
import SidebarFooter from "./SidebarFooter";

const notifications = [{ text: "Halo ini notif" }];

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarHeader notifications={notifications} />
        <main className="bg-gray-100 p-6">{children}</main>
        <SidebarFooter />
      </SidebarInset>
    </SidebarProvider>
  );
}
