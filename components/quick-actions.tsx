"use client"

import { CreditCard, Receipt, Send, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function QuickActions() {
  const actions = [
    {
      title: "Fund Transfer",
      description: "Transfer money to accounts",
      icon: Send,
      href: "/fund-transfer",
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Bill Payment",
      description: "Pay your utility bills",
      icon: Receipt,
      href: "#",
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Mobile Recharge",
      description: "Recharge your mobile",
      icon: Smartphone,
      href: "#",
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Card Services",
      description: "Manage your cards",
      icon: CreditCard,
      href: "#",
      color: "bg-amber-100 text-amber-700",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <Card className="border border-border/50 shadow-md">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Frequently used services</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div className="grid grid-cols-2 gap-4" variants={container} initial="hidden" animate="show">
          {actions.map((action) => (
            <motion.div
              key={action.title}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={action.href}
                className="flex flex-col items-center p-4 text-center transition-colors rounded-lg hover:bg-accent"
              >
                <div className={`p-3 rounded-full mb-2 ${action.color}`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-medium">{action.title}</h3>
                <p className="text-xs text-muted-foreground">{action.description}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  )
}

