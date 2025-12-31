"use client"

import { motion } from "framer-motion"
import { Search, Smartphone, CreditCard } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    id: 1,
    title: "Explorez & Choisissez",
    description: "Parcourez les meilleures résidences, hôtels ou menus autour de vous. Filtrez selon vos besoins et votre budget.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Réservez en un clic",
    description: "Sélectionnez vos dates ou votre plat préféré. Tout se passe instantanément depuis l'application mobile.",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 3,
    title: "Payez & Profitez",
    description: "Payez en toute sécurité via Mobile Money ou carte. Votre service est confirmé, vous n'avez plus qu'à en profiter.",
    icon: CreditCard,
    color: "bg-green-100 text-green-600",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Phone Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center relative"
          >
             <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-90" />
             <div className="relative z-10 w-[500px]">
                <Image 
                    src="/showcase1.png"
                    alt="Application Interface"
                    width={500}
                    height={800}
                    className="w-full h-auto drop-shadow-2xl rotate-3 transition-transform duration-500 hover:rotate-0"
                />
            </div>
             
             {/* Decorative element */}
             <div className="absolute bottom-20 -left-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
             <div className="absolute top-20 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-700" />
          </motion.div>

          {/* Right: Content & Steps */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-lg text-gray-500">
                Une expérience fluide et intuitive, conçue pour vous simplifier la vie en quelques étapes.
              </p>
            </motion.div>

            <div className="space-y-12 relative">
               {/* Connecting Line */}
               <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gray-200 -z-10 hidden md:block" />

              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col md:flex-row gap-6 relative"
                >
                  <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shrink-0 shadow-sm border-4 border-gray-50`}>
                    <step.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                       {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
