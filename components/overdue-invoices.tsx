import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle } from "lucide-react"

const overdueInvoices = [
  { id: "1234", amount: "$500", dueDate: "04/05/25" },
  { id: "1235", amount: "$1,200", dueDate: "04/07/25" },
  { id: "1236", amount: "$300", dueDate: "04/08/25" },
]

export function OverdueInvoices() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-2">
        <AlertCircle className="h-5 w-5 text-destructive" />
        <CardTitle>Overdue Invoices</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {overdueInvoices.map((invoice) => (
            <div key={invoice.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
              <div className="flex flex-col">
                <span className="font-medium">Invoice #{invoice.id}</span>
                <span className="text-sm text-muted-foreground">Due: {invoice.dueDate}</span>
              </div>
              <Badge variant="destructive" className="text-sm">
                {invoice.amount}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
