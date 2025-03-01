"use client"

import { Bell, Info } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Security Alert",
      description: "Your password was changed successfully",
      time: "10 minutes ago",
      type: "security",
    },
    {
      id: 2,
      title: "Transaction Alert",
      description: "₹2,450 was debited from your account",
      time: "2 hours ago",
      type: "transaction",
    },
    {
      id: 3,
      title: "Offer Alert",
      description: "Get 10% cashback on credit card payments",
      time: "1 day ago",
      type: "offer",
    },
  ]

  return (
    <Card className="border border-border/50 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Your recent alerts</CardDescription>
        </div>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </Button>
      </CardHeader>
      <CardContent>
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              className="flex items-start space-x-4 cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <motion.div
                className="p-1 mt-0.5 rounded-full bg-primary/10"
                whileHover={{ scale: 1.2, backgroundColor: "rgba(var(--primary), 0.2)" }}
              >
                <Info className="w-3 h-3 text-primary" />
              </motion.div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{notification.title}</p>
                <p className="text-xs text-muted-foreground">{notification.description}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="w-full text-xs text-primary hover:text-primary/80 transition-colors duration-200"
        >
          View All Notifications
        </Button>
      </CardFooter>
    </Card>
  )
}

