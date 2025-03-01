"use client"

import { Plus, User } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RecentBeneficiaries() {
  const beneficiaries = [
    {
      id: 1,
      name: "CS22B1023 Sharma",
      accountNumber: "XXXX5678",
      bank: "SBI",
    },
    {
      id: 2,
      name: "Priya Patel",
      accountNumber: "XXXX9012",
      bank: "HDFC",
    },
    {
      id: 3,
      name: "Amit Singh",
      accountNumber: "XXXX3456",
      bank: "ICICI",
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
        <CardTitle>Recent Beneficiaries</CardTitle>
        <CardDescription>Quick select for transfer</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div className="grid grid-cols-2 gap-3" variants={container} initial="hidden" animate="show">
          {beneficiaries.map((beneficiary) => (
            <motion.div
              key={beneficiary.id}
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="flex flex-col items-center justify-center h-24 space-y-1 w-full">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{beneficiary.name}</span>
                <span className="text-xs text-muted-foreground">{beneficiary.accountNumber}</span>
              </Button>
            </motion.div>
          ))}

          <motion.div
            variants={item}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="flex flex-col items-center justify-center h-24 space-y-1 border-dashed w-full group"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                <Plus className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-sm font-medium">Add New</span>
              <span className="text-xs text-muted-foreground">Beneficiary</span>
            </Button>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

