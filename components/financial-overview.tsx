"use client"

import { useState } from "react"
import { ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts"

export function FinancialOverview() {
  const [activeTab, setActiveTab] = useState("spending")

  return (
    <Card className="border border-border/50 shadow-md overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>Track your spending and income patterns</CardDescription>
          </div>
          <Tabs defaultValue="spending" className="w-[400px]" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="spending">Spending</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="savings">Savings</TabsTrigger>
              <TabsTrigger value="accounts">Accounts</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] relative">
          {activeTab === "spending" && <SpendingChart />}
          {activeTab === "income" && <IncomeChart />}
          {activeTab === "savings" && <SavingsChart />}
          {activeTab === "accounts" && <AccountsOverview />}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t border-border/30">
        <Button variant="outline" size="sm" className="group">
          <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-y-1" />
          Download Report
        </Button>
        <Button variant="ghost" size="sm" className="group">
          View Details
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

function SpendingChart() {
  const data = [
    { name: "Food & Dining", value: 8500, color: "#3B82F6" },
    { name: "Shopping", value: 6200, color: "#10B981" },
    { name: "Transportation", value: 4500, color: "#8B5CF6" },
    { name: "Entertainment", value: 3800, color: "#F59E0B" },
    { name: "Utilities", value: 3200, color: "#EF4444" },
    { name: "Others", value: 2100, color: "#6B7280" },
  ]

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Monthly Spending Breakdown</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function IncomeChart() {
  const data = [
    { month: "Jan", salary: 45000, investments: 2000, other: 1000 },
    { month: "Feb", salary: 45000, investments: 2200, other: 800 },
    { month: "Mar", salary: 45000, investments: 2100, other: 1200 },
    { month: "Apr", salary: 46000, investments: 2300, other: 900 },
    { month: "May", salary: 46000, investments: 2500, other: 1100 },
    { month: "Jun", salary: 46000, investments: 2400, other: 1300 },
  ]

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Income Sources (Last 6 Months)</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="salary" stackId="a" fill="#3B82F6" />
            <Bar dataKey="investments" stackId="a" fill="#10B981" />
            <Bar dataKey="other" stackId="a" fill="#8B5CF6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function SavingsChart() {
  const data = [
    { month: "Jan", savings: 12000, goal: 15000 },
    { month: "Feb", savings: 14000, goal: 15000 },
    { month: "Mar", savings: 15500, goal: 15000 },
    { month: "Apr", savings: 13000, goal: 15000 },
    { month: "May", savings: 16000, goal: 15000 },
    { month: "Jun", savings: 18000, goal: 15000 },
  ]

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Savings Progress</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="savings" stroke="#3B82F6" strokeWidth={2} />
            <Line type="monotone" dataKey="goal" stroke="#EF4444" strokeWidth={2} strokeDasharray="5 5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function AccountsOverview() {
  const accounts = [
    { type: "Savings", accountNumber: "XXXX1234", balance: 124567.89 },
    { type: "Current", accountNumber: "XXXX5678", balance: 45678.9 },
    { type: "Fixed Deposit", accountNumber: "XXXX9012", balance: 100000, maturityDate: "2025-12-31" },
    { type: "Recurring Deposit", accountNumber: "XXXX3456", balance: 50000, maturityDate: "2026-06-30" },
  ]

  return (
    <div className="h-full flex flex-col space-y-4">
      <h3 className="text-lg font-semibold">Your Accounts</h3>
      {accounts.map((account, index) => (
        <motion.div
          key={account.accountNumber}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="p-4 bg-card rounded-lg shadow-sm border border-border/50"
        >
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-medium text-primary">{account.type}</h4>
              <p className="text-sm text-muted-foreground">{account.accountNumber}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">₹{account.balance.toLocaleString("en-IN")}</p>
              {account.maturityDate && (
                <p className="text-xs text-muted-foreground">Matures on: {account.maturityDate}</p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

