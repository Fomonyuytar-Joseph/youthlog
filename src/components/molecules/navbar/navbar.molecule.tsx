"use client";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@radix-ui/react-separator';
import React from 'react'
import { usePathname } from "next/navigation";


interface NavbarProps{
    children: React.ReactNode;
}

const Navbar:React.FC<NavbarProps> = ({
    children
}) => {
  const pathname = usePathname(); 

  const pageName = pathname.replace("/", "");
  const formattedName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">{formattedName}</BreadcrumbLink>
            </BreadcrumbItem>
            {/* <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{formattedName}</BreadcrumbPage>
            </BreadcrumbItem> */}
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className='p-5'>

      {children}
      </div>
    </SidebarInset>
  );
}

export default Navbar