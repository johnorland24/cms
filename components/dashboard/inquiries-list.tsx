"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Archive, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const inquiries = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 234 567 8900",
    subject: "Product Inquiry",
    status: "New",
    date: "2024-03-20",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 234 567 8901",
    subject: "Service Quote Request",
    status: "In Progress",
    date: "2024-03-19",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "m.brown@example.com",
    phone: "+1 234 567 8902",
    subject: "Custom Project Discussion",
    status: "Completed",
    date: "2024-03-18",
  },
]

export function InquiriesList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Contact</TableHead>
          <TableHead>Subject</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inquiries.map((inquiry) => (
          <TableRow key={inquiry.id}>
            <TableCell>{inquiry.date}</TableCell>
            <TableCell className="font-medium">{inquiry.name}</TableCell>
            <TableCell>
              <div className="flex flex-col">
                <span className="text-sm">{inquiry.email}</span>
                <span className="text-sm text-muted-foreground">{inquiry.phone}</span>
              </div>
            </TableCell>
            <TableCell>{inquiry.subject}</TableCell>
            <TableCell>
              <Badge variant={
                inquiry.status === "New" ? "default" :
                inquiry.status === "In Progress" ? "secondary" :
                "success"
              }>
                {inquiry.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" className="mr-2">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Archive className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}