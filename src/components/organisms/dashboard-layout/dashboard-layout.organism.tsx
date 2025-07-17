import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/molecules/navbar/navbar.molecule";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <Navbar>{children}</Navbar>
    </SidebarProvider>
  );
};

export default DashboardLayout;
