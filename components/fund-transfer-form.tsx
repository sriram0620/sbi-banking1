"use client"

import type React from "react"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

interface FundTransferFormProps {
  transferType: "within-bank" | "neft" | "imps" | "upi"
}

export function FundTransferForm({ transferType }: FundTransferFormProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const handleNext = () => {
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setStep(3) // Success step
    }, 1500)
  }

  return (
    <div className="space-y-4">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center w-full">
          <motion.div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            1
          </motion.div>
          <motion.div
            className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-primary" : "bg-muted"}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: step >= 2 ? 1 : 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            2
          </motion.div>
          <motion.div
            className={`flex-1 h-1 mx-2 ${step >= 3 ? "bg-primary" : "bg-muted"}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: step >= 2 ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          ></motion.div>
          <motion.div
            className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: step >= 3 ? 1 : 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            3
          </motion.div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-2">
              <Label htmlFor="from-account">From Account</Label>
              <Select defaultValue="savings">
                <SelectTrigger id="from-account" className="w-full transition-all duration-200 hover:border-primary">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="savings">Savings Account - XXXX1234 (₹1,24,567.89)</SelectItem>
                  <SelectItem value="current">Current Account - XXXX5678 (₹45,678.90)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="beneficiary-type">Beneficiary Type</Label>
              <Select defaultValue="existing">
                <SelectTrigger id="beneficiary-type" className="transition-all duration-200 hover:border-primary">
                  <SelectValue placeholder="Select beneficiary type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="existing">Existing Beneficiary</SelectItem>
                  <SelectItem value="new">New Beneficiary</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="beneficiary">Select Beneficiary</Label>
              <Select defaultValue="CS22B1023">
                <SelectTrigger id="beneficiary" className="transition-all duration-200 hover:border-primary">
                  <SelectValue placeholder="Select beneficiary" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CS22B1023">CS22B1023 Sharma - XXXX5678</SelectItem>
                  <SelectItem value="priya">Priya Patel - XXXX9012</SelectItem>
                  <SelectItem value="amit">Amit Singh - XXXX3456</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">₹</div>
                <Input
                  id="amount"
                  placeholder="Enter amount"
                  className="pl-8 transition-all duration-200 border-input focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="remarks">Remarks (Optional)</Label>
              <Input
                id="remarks"
                placeholder="Add a note"
                className="transition-all duration-200 border-input focus:border-primary"
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="save-beneficiary" />
              <Label htmlFor="save-beneficiary" className="text-sm">
                Save as favorite beneficiary
              </Label>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={handleNext}
                className="w-full mt-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="p-4 space-y-3 border rounded-lg border-border"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">From Account</span>
                <span className="text-sm font-medium">Savings Account - XXXX1234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">To Account</span>
                <span className="text-sm font-medium">CS22B1023 Sharma - XXXX5678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Amount</span>
                <span className="text-sm font-medium">₹10,000.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Transfer Type</span>
                <span className="text-sm font-medium">{transferType.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Remarks</span>
                <span className="text-sm font-medium">Rent payment</span>
              </div>
            </motion.div>

            <motion.div
              className="p-4 space-y-3 border rounded-lg border-border"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-medium">Transaction Charges</h3>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Transfer Fee</span>
                <span className="text-sm font-medium">₹0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">GST</span>
                <span className="text-sm font-medium">₹0.00</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="text-sm font-medium">Total Amount</span>
                <span className="text-sm font-medium">₹10,000.00</span>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-2 pt-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions for this transaction
              </Label>
            </motion.div>

            <motion.div
              className="flex justify-between gap-4 pt-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="button" variant="outline" onClick={handleBack}>
                  Back
                </Button>
              </motion.div>
              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8SBIC5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    "Confirm Transfer"
                  )}
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        )}

        {step === 3 && (
          <motion.div
            className="flex flex-col items-center justify-center py-8 space-y-4 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.2 }}
            >
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <motion.h3
              className="text-xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transfer Successful!
            </motion.h3>
            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your transfer of ₹10,000.00 to CS22B1023 Sharma has been completed successfully.
            </motion.p>

            <motion.div
              className="p-4 w-full space-y-3 border rounded-lg border-border"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Transaction ID</span>
                <span className="text-sm font-medium">SBI12345678</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Date & Time</span>
                <span className="text-sm font-medium">Mar 1, 2025, 1:30 PM</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4 pt-4 w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="group">
                  <svg
                    className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Receipt
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" className="group">
                  <svg
                    className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                  Share Receipt
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300">
                  New Transfer
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

