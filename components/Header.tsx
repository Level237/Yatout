"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, Building2, UtensilsCrossed, ShieldCheck, Lock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

const services = [
  {
    title: "Résidences",
    description: "Hébergement privé",
    icon: Home,
    href: "#residences",
  },
  {
    title: "Hôtels",
    description: "Hébergement pro",
    icon: Building2,
    href: "#hotels",
  },
  {
    title: "Restauration",
    description: "Tables & Saveurs",
    icon: UtensilsCrossed,
    href: "#restauration",
  },
]



export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className=" gap-3 p-4 md:grid-cols-2  bg-white">
                      {services.map((item) => (
                        <ListItem
                        className="text-black"
                          key={item.title}
                          title={item.title}
                          href={item.href}

                        >
                         
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/docs">Pourquoi Yatout ?</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/docs">A propos de nous</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="/docs">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Devenir Prestataire
            </Button>
            <Button className="hidden md:inline-flex  bg-[#00CFE4] hover:bg-[#00CFE4]/90 rounded-md px-6 shadow-lg shadow-secondary/20">
              Télécharger l'App
            </Button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors z-50 relative"
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
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 top-0 bg-white z-40 pt-24 overflow-y-auto"
          >
            <div className="container mx-auto px-4 flex flex-col gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary">Services</h3>
                <div className="grid gap-2 pl-4">
                  {services.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 py-2 text-gray-600 hover:text-primary"
                    >
                      <item.icon size={20} className="text-primary" />
                      <div>
                        <div className="font-medium">{item.title}</div>
                        <div className="text-sm text-gray-400">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary">Pourquoi Yatou ?</h3>
               
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white h-12"
                >
                  Devenir Prestataire
                </Button>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white h-12 shadow-md">
                  Télécharger l'App
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

const ListItem = ({ className, title, children, icon: Icon, href, ...props }: any) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={undefined}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3 mb-1">
            {Icon && <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />}
            <div className="text-sm font-medium leading-none text-black group-hover:text-primary transition-colors">
              {title}
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-black pl-8">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
}
