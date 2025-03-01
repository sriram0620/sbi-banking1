"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, DollarSign, Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AccountSummary() {
  const [activeTab, setActiveTab] = useState("savings")

  return (
    <Tabs defaultValue="savings" className="w-full" onValueChange={setActiveTab}>
      <div className="flex items-center justify-between mb-4">
        <TabsList className="p-1 bg-muted/50 backdrop-blur-sm">
          <TabsTrigger
            value="savings"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white transition-all duration-300"
          >
            Savings Account
          </TabsTrigger>
          <TabsTrigger
            value="current"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white transition-all duration-300"
          >
            Current Account
          </TabsTrigger>
          <TabsTrigger
            value="fixed"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white transition-all duration-300"
          >
            Fixed Deposits
          </TabsTrigger>
        </TabsList>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline" size="sm" className="group">
            <Plus className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-90" />
            Add Account
          </Button>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <TabsContent value="savings" className="mt-0">
            <div className="grid gap-4 md:grid-cols-3">
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Card className="overflow-hidden border-t-4 border-t-primary shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
                    <DollarSign className="w-4 h-4 text-primary" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₹1,24,567.89</div>
                    <p className="text-xs text-muted-foreground">Account No: XXXX XXXX 1234</p>
                  </CardContent>
                  <div className="h-2 bg-primary/10">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                    ></motion.div>
                  </div>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Card className="border-t-4 border-t-green-500 shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Income (This Month)</CardTitle>
                    <ArrowDown className="w-4 h-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₹45,000.00</div>
                    <div className="flex items-center mt-1 text-xs text-green-500">
                      <ArrowUp className="w-3 h-3 mr-1" />
                      <span>12% from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                <Card className="border-t-4 border-t-red-500 shadow-md">
                  <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-sm font-medium">Expenses (This Month)</CardTitle>
                    <ArrowUp className="w-4 h-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">₹32,450.00</div>
                    <div className="flex items-center mt-1 text-xs text-red-500">
                      <ArrowUp className="w-3 h-3 mr-1" />
                      <span>8% from last month</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </motion.div>
      </AnimatePresence>

      <TabsContent value="current" className="mt-0">
        <Card>
          <CardHeader>
            <CardTitle>Current Account</CardTitle>
            <CardDescription>Your current account details will appear here</CardDescription>
          </CardHeader>
          <CardContent className="h-40 flex items-center justify-center">
            <p className="text-muted-foreground">No current account found</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full group">
              <Plus className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-90" />
              Open Current Account
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="fixed" className="mt-0">
        <Card>
          <CardHeader>
            <CardTitle>Fixed Deposits</CardTitle>
            <CardDescription>Your fixed deposit details will appear here</CardDescription>
          </CardHeader>
          <CardContent className="h-40 flex items-center justify-center">
            <p className="text-muted-foreground">No fixed deposits found</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full group">
              <Plus className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-90" />
              Create Fixed Deposit
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

