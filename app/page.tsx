"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Contact2, ShoppingBag, Wrench } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container py-10">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Business CMS Platform
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-xl">
          Manage your business website content with ease. Upload products, manage services, and handle customer interactions all in one place.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <ShoppingBag className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Products</CardTitle>
            <CardDescription>Manage your product </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard/products">View Products</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Building2 className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Brand</CardTitle>
            <CardDescription>Update your brand details</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard/brand">Manage Brand</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Wrench className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Services</CardTitle>
            <CardDescription>Configure available services</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard/services">View Services</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Contact2 className="w-8 h-8 mb-2 text-primary" />
            <CardTitle>Inquiries</CardTitle>
            <CardDescription>Manage customer contacts</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dashboard/inquiries">View Inquiries</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}