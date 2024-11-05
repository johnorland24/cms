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
import Image from "next/image"

const services = [
  {
    id: 1,
    name: "Web Development",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop",
    description: "Custom website development services",
    status: "Active",
  },
  {
    id: 2,
    name: "Digital Marketing",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=300&fit=crop",
    description: "Comprehensive digital marketing solutions",
    status: "Active",
  },
  {
    id: 3,
    name: "Brand Design",
    logo: "https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?w=300&h=300&fit=crop",
    description: "Professional branding and design services",
    status: "Active",
  },
]

export function ServiceList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Logo</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell>
              <div className="relative h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={service.logo}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
            </TableCell>
            <TableCell className="font-medium">{service.name}</TableCell>
            <TableCell>{service.description}</TableCell>
            <TableCell>{service.status}</TableCell>
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