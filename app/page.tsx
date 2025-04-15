import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import { KeyMetrics } from "@/components/key-metrics"
import { OverdueInvoices } from "@/components/overdue-invoices"
import { QuickActions } from "@/components/quick-actions"
import { RecentInvoices } from "@/components/recent-invoices"
import ProtectedRoute from "./protected-route"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <DashboardHeader />
        <DashboardNav />
        <main className="container mx-auto p-4 md:p-6 space-y-6">
          <KeyMetrics />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <OverdueInvoices />
            <QuickActions />
          </div>
          <RecentInvoices />
        </main>
      </div>
    </ProtectedRoute>
  )
}
