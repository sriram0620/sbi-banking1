"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, KeyRound, User } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  })
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: "spring", stiffness: 300, damping: 10 } },
    blur: { scale: 1 },
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="space-y-2">
        <Label htmlFor="username" className="text-sm font-medium">
          Username
        </Label>
        <motion.div className="relative" whileFocus="focus" animate="blur" variants={inputVariants}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <User className="w-4 h-4 text-muted-foreground" />
          </div>
          <Input
            id="username"
            placeholder="Enter your username"
            className="pl-10 transition-all duration-200 border-input focus:border-primary"
            required
            value={formState.username}
            onChange={handleChange}
          />
        </motion.div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <motion.div className="relative" whileFocus="focus" animate="blur" variants={inputVariants}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <KeyRound className="w-4 h-4 text-muted-foreground" />
          </div>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="pl-10 pr-10 transition-all duration-200 border-input focus:border-primary"
            required
            value={formState.password}
            onChange={handleChange}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute inset-y-0 right-0 flex items-center pr-3 transition-opacity duration-200 hover:opacity-70"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4 text-muted-foreground" />
            ) : (
              <Eye className="w-4 h-4 text-muted-foreground" />
            )}
            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
          </Button>
        </motion.div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm">
            Remember me
          </Label>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          Virtual Keyboard
        </Button>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8SBIC5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Authenticating...
            </div>
          ) : (
            "Login"
          )}
        </Button>
      </motion.div>

      <div className="flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">Language:</span>
          <select className="text-xs bg-transparent border-none outline-none focus:ring-0 cursor-pointer hover:text-primary transition-colors duration-200">
            <option>English</option>
            <option>Hindi</option>
            <option>Bengali</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>
    </motion.form>
  )
}

