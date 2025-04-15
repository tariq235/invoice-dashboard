"use client"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Clock, AlertCircle, DollarSign } from "lucide-react"

function getMonthYear(dateStr: string) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}-${d.getMonth() + 1}`
}

export function KeyMetrics() {
  const [invoices, setInvoices] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/data/invoices.json")
      .then((res) => res.json())
      .then((data) => {
        setInvoices(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  const now = new Date()
  const monthKey = `${now.getFullYear()}-${now.getMonth() + 1}`
  const thisMonthInvoices = invoices.filter(inv => getMonthYear(inv.dueDate) === monthKey)
  const totalInvoicesThisMonth = thisMonthInvoices.length
  const pendingInvoices = invoices.filter(inv => inv.status === "Pending")
  const pendingAmount = pendingInvoices.reduce((sum, inv) => sum + Number(inv.amount.replace(/[^\d.]/g, "")), 0)
  const overdueInvoices = invoices.filter(inv => inv.status === "Overdue")
  const overdueCount = overdueInvoices.length
  const overdueValue = overdueInvoices.reduce((sum, inv) => sum + Number(inv.amount.replace(/[^\d.]/g, "")), 0)
  const paidInvoices = invoices.filter(inv => inv.status === "Paid")
  const revenueCollected = paidInvoices.reduce((sum, inv) => sum + Number(inv.amount.replace(/[^\d.]/g, "")), 0)

  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight mb-4">Key Metrics</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-violet-500 to-purple-500">
            <CardTitle className="text-sm font-medium text-white">Total Invoices This Month</CardTitle>
            <FileText className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">{totalInvoicesThisMonth}</div>
            <p className="text-xs text-muted-foreground mt-1">Invoices due this month</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-cyan-500 to-blue-500">
            <CardTitle className="text-sm font-medium text-white">Pending Payments</CardTitle>
            <Clock className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">${pendingAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">{pendingInvoices.length} invoices awaiting payment</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-amber-500 to-red-500">
            <CardTitle className="text-sm font-medium text-white">Overdue Invoices</CardTitle>
            <AlertCircle className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">{overdueCount}</div>
            <p className="text-xs text-muted-foreground mt-1">Total value: ${overdueValue.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-gradient-to-r from-green-500 to-emerald-600">
            <CardTitle className="text-sm font-medium text-white">Revenue Collected</CardTitle>
            <DollarSign className="h-4 w-4 text-white" />
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-3xl font-bold">${revenueCollected.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Total paid invoices</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
