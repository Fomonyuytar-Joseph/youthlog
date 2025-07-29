"use client"
import * as React from "react"

import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { CalendarCheck2, ChartLine, HandCoins, LayoutDashboard, UsersRound } from "lucide-react"
import LinkButton from "./molecules/link-button/linkButton.molecule"
import { usePathname } from "next/navigation"




const navLinkData = [
  {
    title: "Overview",
    href: "/overview",
    icon: <LayoutDashboard />,
  },
  {
    title: "Members",
    href: "/members",
    icon: <UsersRound />,
  },
  {
    title: "Finance",
    href: "/finance",
    icon: <HandCoins />,
  },
  
  {
    title: "Attendance",
    href: "/attendance",
    icon: <ChartLine />,
  },
  {
    title: "Programs",
    href: "/programs",
    icon: <CalendarCheck2 />,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  // console.log("AppSidebar pathname:", pathname);
  return (
    <Sidebar {...props}>
      <SidebarHeader className="hover:bg-transparent">
        <VersionSwitcher
        />
      </SidebarHeader>
      <SidebarContent>
        <div className="w-full flex flex-col gap-8 mt-8 px-4">
         {
          navLinkData.map((link) => (
            <LinkButton
              key={link.title}
              href={link.href}
              icon={link.icon}
              active={link.href === pathname}
              text= {link.title}
              />
          ))
         }
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
