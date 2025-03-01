"use client"

import { useState } from "react"
import { ArrowDown, ShoppingBag, Smartphone, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RecentTransactions() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const transactions = [
    {
      id: 1,
      description: "Amazon.in",
      amount: "₹2,450.00",
      date: "Today, 10:30 AM",
      type: "debit",
      icon: ShoppingBag,
    },
    {
      id: 2,
      description: "Salary Credit",
      amount: "₹45,000.00",
      date: "Feb 28, 2025",
      type: "credit",
      icon: ArrowDown,
    },
    {
      id: 3,
      description: "Electricity Bill",
      amount: "₹1,240.00",
      date: "Feb 25, 2025",
      type: "debit",
      icon: Zap,
    },
    {
      id: 4,
      description: "Mobile Recharge",
      amount: "₹499.00",
      date: "Feb 22, 2025",
      type: "debit",
      icon: Smartphone,
    },
  ]

  return (
    <Card className="col-span-2 md:col-span-1 overflow-hidden border border-border/50 shadow-md">
      <CardHeader className="bg-card">
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest account activity</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {transactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              className="flex items-center p-4 border-b border-border/30 last:border-0 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ backgroundColor: "rgba(0,0,0,0.02)" }}
              onHoverStart={() => setHoveredId(transaction.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <motion.div
                className={`flex items-center justify-center w-10 h-10 mr-4 rounded-full ${
                  transaction.type === "credit" ? "bg-green-100" : "bg-red-100"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <transaction.icon
                  className={`w-5 h-5 ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}
                />
              </motion.div>
              <div className="flex-1">
                <p className="text-sm font-medium">{transaction.description}</p>
                <p className="text-xs text-muted-foreground">{transaction.date}</p>
              </div>
              <motion.div
                className={`text-sm font-medium ${transaction.type === "credit" ? "text-green-500" : "text-red-500"}`}
                animate={{
                  scale: hoveredId === transaction.id ? 1.05 : 1,
                  y: hoveredId === transaction.id ? -2 : 0,
                }}
              >
                {transaction.type === "credit" ? "+" : "-"}
                {transaction.amount}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-card">
        <Button variant="ghost" className="w-full text-primary hover:text-primary/80 transition-colors duration-200">
          View All Transactions
        </Button>
      </CardFooter>
    </Card>
  )
}

