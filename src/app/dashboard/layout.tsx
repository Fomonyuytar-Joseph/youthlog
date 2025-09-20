import NextTopLoader from "nextjs-toploader";
import DashboardLayout from "@/components/organisms/dashboard-layout/dashboard-layout.organism";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <NextTopLoader color="oklch(0.723 0.219 149.579)" />
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
}
