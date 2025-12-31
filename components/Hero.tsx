"use client"

import { motion } from "framer-motion"
import { CheckCircle, Play, Star, MapPin, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const benefits = [
  "Large réseau de prestataires vérifiés",
  "Paiement sécurisé & Service client 7/7",
  "Réservation simple et rapide",
]

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Background Shapes */}
      <div className="absolute top-20 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <span className="text-primary font-semibold tracking-wide uppercase text-sm bg-primary/10 px-4 py-2 rounded-full">
                La Super App du Quotidien
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A2B3C] leading-tight"
            >
              Réservation, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Livraison & Services
              </span>{" "}
              en un clic 🚀
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              Trouvez tout ce dont vous avez besoin, des meilleurs hébergements aux services à domicile, directement depuis votre poche.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90 rounded-full h-14 px-8 text-lg shadow-lg shadow-secondary/20 transition-transform hover:scale-105"
              >
                Télécharger maintenant
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="group h-14 px-6 text-gray-600 hover:text-primary rounded-full"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 shadow-sm group-hover:border-primary/30 transition-colors">
                  <Play className="text-primary ml-1" size={18} fill="currentColor" />
                </div>
                Voir la vidéo
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                   <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="text-yellow-400"
                      size={16}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500 font-medium mt-0.5">
                  Rejoint par <span className="text-gray-900 font-bold">+10,000</span>{" "}
                  utilisateurs
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual (Phone Mockup) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block h-[700px] w-full"
          >
            {/* Main Phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[680px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 z-10">
              <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Header */}
                <div className="h-28 bg-primary p-6 pt-10 text-white flex flex-col justify-between">
                   <div className="flex justify-between items-center">
                     <div className="w-6 h-1 bg-white/50 rounded-full" />
                     <div className="w-8 h-8 rounded-full bg-white/20" />
                   </div>
                   <div className="relative">
                      <div className="absolute top-1/2 -translate-y-1/2 left-3 text-primary">
                          <Search size={16} />
                      </div>
                      <div className="w-full h-10 bg-white rounded-full flex items-center px-10 text-sm text-gray-400">
                      Rechercher...
                      </div>
                   </div>
                </div>

                {/* Categories Grid */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  {['Hôtels', 'Villas', 'Restos', 'Ménage', 'Livraison', 'Loisirs'].map((item, i) => (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + (i * 0.1) }}
                        key={item} 
                        className="aspect-square bg-gray-50 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-gray-100 transition-colors cursor-pointer group"
                    >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                           <div className="w-4 h-4 rounded-sm bg-current" />
                        </div>
                        <span className="text-sm font-medium text-gray-600">{item}</span>
                    </motion.div>
                  ))}
                </div>

                 {/* Bottom Nav */}
                 <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t flex items-center justify-around px-6">
                    <div className="w-6 h-6 bg-primary rounded-full" />
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                    <div className="w-6 h-6 bg-gray-200 rounded-full" />
                 </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px] z-20"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Statut</p>
                <p className="text-sm font-bold text-gray-800">Confirmé</p>
              </div>
            </motion.div>

             <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-40 left-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
            >
               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Chauffeur</p>
                <p className="text-sm font-bold text-gray-800">En route (2 min)</p>
              </div>
            </motion.div>

             {/* Background decorative phone */}
             <div className="absolute top-10 right-20 w-[300px] h-[600px] bg-gray-100 rounded-[3rem] -z-10 rotate-12 opacity-50" />

          </motion.div>
        </div>
      </div>
    </section>
  )
}
