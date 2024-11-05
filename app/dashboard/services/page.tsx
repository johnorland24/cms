"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Plus } from "lucide-react"
import { ServiceList } from "@/components/dashboard/service-list"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Services</h2>
        <Button onClick={() => router.push('/dashboard/services/add')}>
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Service Management</CardTitle>
          <CardDescription>
            Manage your service offerings and update service details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ServiceList />
        </CardContent>
      </Card>
    </div>
  )
}