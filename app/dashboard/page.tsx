import Link from "next/link"
import {
  Bell,
  CreditCard,
  DollarSign,
  HelpCircle,
  LineChart,
  LogOut,
  PieChart,
  RefreshCw,
  Search,
  Send,
  Settings,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AccountSummary } from "@/components/account-summary"
import { RecentTransactions } from "@/components/recent-transactions"
import { QuickActions } from "@/components/quick-actions"
import { Notifications } from "@/components/notifications"
import { FinancialOverview } from "@/components/financial-overview"
import { MobileNavigation } from "@/components/mobile-navigation"

export default function Dashboard() {
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
            className="flex items-center w-full p-2 text-sm font-medium rounded-md bg-primary/10 text-primary transition-all duration-200 hover:translate-x-1"
          >
            <PieChart className="w-4 h-4 mr-3" />
            Dashboard
          </Link>
          <Link
            href="/fund-transfer"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1"
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
            <LineChart className="w-4 h-4 mr-3" />
            Statements
          </Link>
          <Link
            href="#"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1"
          >
            <User className="w-4 h-4 mr-3" />
            Profile
          </Link>
          <Link
            href="#"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1"
          >
            <Settings className="w-4 h-4 mr-3" />
            Settings
          </Link>
          <Link
            href="#"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1"
          >
            <HelpCircle className="w-4 h-4 mr-3" />
            Help
          </Link>
        </nav>

        <div className="pt-6 mt-6 border-t border-sidebar-border">
          <Link
            href="/"
            className="flex items-center w-full p-2 text-sm font-medium rounded-md text-sidebar-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:translate-x-1"
          >
            <LogOut className="w-4 h-4 mr-3" />
            Logout
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-auto md:p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome, CS22B1023</h1>
            <p className="text-sm text-muted-foreground">Last login: March 1, 2025 at 12:45 PM</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <Input placeholder="Search..." className="w-64 pl-10 transition-all duration-300 focus:w-72" />
              <Search className="absolute w-4 h-4 transform -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
            </div>

            <Button
              variant="outline"
              size="icon"
              className="relative transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </header>

        <AccountSummary />

        <div className="grid gap-6 mt-6 md:grid-cols-3">
          <QuickActions />
          <RecentTransactions />
          <Notifications />
        </div>

        <div className="mt-6">
          <FinancialOverview />
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </div>
  )
}

