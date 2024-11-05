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
import { Edit, Trash2 } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Package",
    price: 450,
    description: "Complete business solution package",
    status: "In Stock",
  },
  {
    id: 2,
    name: "Basic Service",
    price: 299,
    description: "Essential business services",
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Custom Solution",
    price: 799,
    description: "Tailored business solutions",
    status: "In Stock",
  },
]

export function ProductList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.description}</TableCell>
            <TableCell>${product.price}</TableCell>
            <TableCell>{product.status}</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="icon" className="mr-2">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}