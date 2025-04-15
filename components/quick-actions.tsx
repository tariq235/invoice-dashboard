import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, List } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button className="w-full justify-start">
          <Plus className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <List className="mr-2 h-4 w-4" />
          View All Invoices
        </Button>
      </CardContent>
    </Card>
  )
}
