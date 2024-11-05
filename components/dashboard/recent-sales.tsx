import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">John Doe</p>
          <p className="text-sm text-muted-foreground">
            Product inquiry: Premium Package
          </p>
        </div>
        <div className="ml-auto font-medium">+$450.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Alice Smith</p>
          <p className="text-sm text-muted-foreground">Service booking request</p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarFallback>RJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Robert Johnson</p>
          <p className="text-sm text-muted-foreground">
            Custom service inquiry
          </p>
        </div>
        <div className="ml-auto font-medium">+$799.00</div>
      </div>
    </div>
  )
}