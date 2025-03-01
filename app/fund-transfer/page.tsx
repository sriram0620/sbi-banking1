import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CreditCard,
  DollarSign,
  HelpCircle,
  Info,
  PieChart,
  Send,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FundTransferForm } from "@/components/fund-transfer-form"
import { RecentBeneficiaries } from "@/components/recent-beneficiaries"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function FundTransfer() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden w-64 p-4 border-r border-border md:block bg-sidebar">
        <div className="flex items-center mb-6 space-x-2">
          <div className="p-1 bg-primary rounded-md">
            <DollarSign className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold">SBI Banking</h1>
        </div>

        <nav className="space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1"
          >
            <PieChart className="w-4 h-4 mr-3" />
            Dashboard
          </Link>
          <Link
            href="/fund-transfer"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md bg-primary/10 text-primary transition-all duration-200 hover:translate-x-1"
          >
            <Send className="w-4 h-4 mr-3" />
            Fund Transfer
          </Link>
          <Link
            href="#"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1"
          >
            <CreditCard className="w-4 h-4 mr-3" />
            Bill Payments
          </Link>
          <Link
            href="#"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1"
          >
            <Calendar className="w-4 h-4 mr-3" />
            Statements
          </Link>
          <Link
            href="#"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1"
          >
            <User className="w-4 h-4 mr-3" />
            Profile
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-auto md:p-6">
        <div className="flex items-center mb-6 space-x-2">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <Link href="/dashboard">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Fund Transfer</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="border border-border/50 shadow-md">
              <CardHeader>
                <CardTitle>Transfer Money</CardTitle>
                <CardDescription>Send money to your beneficiaries</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="within-bank" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 p-1 bg-muted/50 backdrop-blur-sm">
                    <TabsTrigger
                      value="within-bank"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white transition-all duration-300"
                    >
                      Within SBI
                    </TabsTrigger>
                    <TabsTrigger
                      value="neft"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white transition-all duration-300"
                    >
                      NEFT
                    </TabsTrigger>
                    <TabsTrigger
                      value="imps"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white transition-all duration-300"
                    >
                      IMPS
                    </TabsTrigger>
                    <TabsTrigger
                      value="upi"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-primary/90 data-[state=active]:text-white transition-all duration-300"
                    >
                      UPI
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="within-bank" className="mt-4">
                    <FundTransferForm transferType="within-bank" />
                  </TabsContent>

                  <TabsContent value="neft" className="mt-4">
                    <FundTransferForm transferType="neft" />
                  </TabsContent>

                  <TabsContent value="imps" className="mt-4">
                    <FundTransferForm transferType="imps" />
                  </TabsContent>

                  <TabsContent value="upi" className="mt-4">
                    <FundTransferForm transferType="upi" />
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-border">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Info className="w-4 h-4 mr-2" />
                  <span>Transactions are secured with 256-bit encryption</span>
                </div>
                <Button variant="ghost" size="sm" className="hover:text-primary transition-colors duration-200">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <RecentBeneficiaries />

            <Card className="mt-6 border border-border/50 shadow-md">
              <CardHeader>
                <CardTitle>Transfer Limits</CardTitle>
                <CardDescription>Your daily transaction limits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">NEFT</span>
                      <span className="text-sm font-medium">₹10,00,000</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">₹2,50,000 used today</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">IMPS</span>
                      <span className="text-sm font-medium">₹5,00,000</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/5 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">₹3,00,000 used today</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">UPI</span>
                      <span className="text-sm font-medium">₹1,00,000</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-1/2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <p className="text-xs text-muted-foreground">₹50,000 used today</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group">
                  <ArrowRight className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                  Request Limit Increase
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </div>
  )
}

