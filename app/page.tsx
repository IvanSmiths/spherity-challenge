import { AppSidebar } from "@/components/ui/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar/sidebar";
import { getBattery } from "@/services/getBattery";
import SidebarHeader from "@/components/home/sidebar-header";
import App from "@/components/home/app";

export default async function Home() {
  let battery = null;
  try {
    battery = await getBattery();
  } catch (error) {
    console.error("Error fetching battery data:", error);
  }

  if (!battery) {
    return <div>Something went wrong on our side. Please notify us.</div>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarHeader battery={battery} />
        <App battery={battery} />
      </SidebarInset>
    </SidebarProvider>
  );
}
