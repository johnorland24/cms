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
import { ProductList } from "@/components/dashboard/product-list"
import { useRouter } from "next/navigation"

export default function ProductsPage() {
  const router = useRouter()

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <Button onClick={() => router.push('/dashboard/products/add')}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Product Management</CardTitle>
          <CardDescription>
            Manage your product catalog, update details, and control inventory
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ProductList />
        </CardContent>
      </Card>
    </div>
  )
}