"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Building2, Contact2, LayoutDashboard, ShoppingBag, Wrench } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: ShoppingBag,
  },
  {
    title: "Brand",
    href: "/dashboard/brand",
    icon: Building2,
  },
  {
    title: "Services",
    href: "/dashboard/services",
    icon: Wrench,
  },
  {
    title: "Inquiries",
    href: "/dashboard/inquiries",
    icon: Contact2,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <nav className="flex flex-col space-y-1">
              {sidebarNavItems.map((item) => (
                <Button
                  key={item.href}
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="justify-start"
                  asChild
                >
                  <Link href={item.href}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </nav>
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    </div>
  )
}