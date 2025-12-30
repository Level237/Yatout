"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Fonctionnalités", href: "#features" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Yatout
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Télécharger l'application
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-gray-100"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-gray-600 hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full mt-2">
                Télécharger l'application
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
