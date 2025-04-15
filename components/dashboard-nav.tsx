"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Invoices", href: "/invoices" },
  { name: "Customers", href: "/customers" },
  { name: "Payments", href: "/payments" },
  { name: "Reports", href: "/reports" },
  { name: "Settings", href: "/settings" },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="border-b bg-background">
      <div className="container flex h-14 items-center">
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary border-b-2 border-primary -mb-[2px]" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
