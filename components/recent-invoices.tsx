"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Pencil, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export function RecentInvoices() {
  const [invoices, setInvoices] = useState<any[]>([])
  useEffect(() => {
    fetch("/data/invoices.json")
      .then((res) => res.json())
      .then((data) => setInvoices(data))
  }, [])

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Recent Invoices</h2>
      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell className="font-medium">#{invoice.id}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell>{invoice.amount}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      invoice.status === "Paid"
                        ? "success"
                        : invoice.status === "Pending"
                        ? "outline"
                        : "destructive"
                    }
                  >
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0"
                    aria-label={invoice.action === "View" ? "View invoice" : "Edit invoice"}
                  >
                    {invoice.action === "View" ? <Eye className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between px-4 py-4 border-t">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Page 1/10</p>
            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Input className="h-8 w-[150px]" placeholder="Search..." type="search" />
            <div className="flex">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none border-l-0">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
