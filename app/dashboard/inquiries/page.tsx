"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { InquiriesList } from "@/components/dashboard/inquiries-list"

export default function InquiriesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Inquiries</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Inquiries Management</CardTitle>
          <CardDescription>
            View and manage customer inquiries and contact requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InquiriesList />
        </CardContent>
      </Card>
    </div>
  )
}