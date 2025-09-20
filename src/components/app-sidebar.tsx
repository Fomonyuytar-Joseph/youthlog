"use client";
import * as React from "react";

import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  CalendarCheck2,
  ChartLine,
  HandCoins,
  LayoutDashboard,
  LogOut,
  UsersRound,
} from "lucide-react";
import LinkButton from "./molecules/link-button/linkButton.molecule";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const navLinkData = [
  {
    title: "Overview",
    href: "/dashboard/overview",
    icon: <LayoutDashboard />,
  },
  {
    title: "Members",
    href: "/dashboard/members",
    icon: <UsersRound />,
  },
  {
    title: "Finance",
    href: "/dashboard/finance",
    icon: <HandCoins />,
  },

  {
    title: "Attendance",
    href: "/dashboard/attendance",
    icon: <ChartLine />,
  },
  {
    title: "Programs",
    href: "/dashboard/programs",
    icon: <CalendarCheck2 />,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    router.push("/");
  };

  // console.log("AppSidebar pathname:", pathname);
  return (
    <Sidebar {...props}>
      <SidebarHeader className="hover:bg-transparent">
        <VersionSwitcher />
      </SidebarHeader>

      <SidebarContent className="flex flex-col flex-1 justify-between">
        <div className="w-full flex flex-col gap-8 mt-8 px-4">
          {navLinkData.map((link) => (
            <LinkButton
              key={link.title}
              href={link.href}
              icon={link.icon}
              active={link.href === pathname}
              text={link.title}
            />
          ))}
        </div>
        <div className="w-full flex flex-col  mb-6">
          <button
            className="flex items-center gap-2 text-red-600 hover:text-red-700  mx-4 p-3 py-2 rounded transition-colors cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut />
            Logout
          </button>
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
