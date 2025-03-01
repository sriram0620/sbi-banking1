"use client"

import { useState } from "react"
import Link from "next/link"
import { CreditCard, Home, LineChart, Menu, Send, User, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: Send, label: "Transfer", href: "/fund-transfer" },
    { icon: CreditCard, label: "Bills", href: "#" },
    { icon: LineChart, label: "Reports", href: "#" },
    { icon: User, label: "Profile", href: "#" },
  ]

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <motion.button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          >
            <motion.div
              className="absolute bottom-20 right-4 p-2 bg-card rounded-lg shadow-lg border border-border"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={item.href} onClick={toggleMenu}>
                      <Button variant="ghost" className="w-full justify-start">
                        <item.icon className="w-5 h-5 mr-2" />
                        {item.label}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

