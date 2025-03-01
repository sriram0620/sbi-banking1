"use client"

import Link from "next/link"
import { Shield } from "lucide-react"
import { motion } from "framer-motion"
import LoginForm from "@/components/login-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 overflow-hidden">
      <div className="container flex flex-col items-center justify-center min-h-screen py-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-2 text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
            className="flex items-center justify-center p-3 bg-primary rounded-full"
          >
            <Shield className="w-10 h-10 text-primary-foreground" />
          </motion.div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            SBI Online Banking
          </h1>
          <p className="max-w-[600px] text-muted-foreground">Secure, reliable banking at your fingertips</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-md p-6 mt-8 space-y-6 bg-card rounded-lg shadow-lg border border-border/30 backdrop-blur-sm"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-semibold">Login to your account</h2>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </div>

          <LoginForm />

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Link href="#" className="text-sm text-primary hover:underline transition-colors duration-200">
              Register for online banking
            </Link>
            <Link href="#" className="text-sm text-primary hover:underline transition-colors duration-200">
              Forgot password?
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center mt-6 space-x-4"
        >
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">Secure connection</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">256-bit encryption</span>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

