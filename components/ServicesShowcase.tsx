"use client"

import { motion } from "framer-motion"
import { Home, Building2, UtensilsCrossed, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Résidences",
    description: "Hébergement privé pour vos séjours courtes et longues durées.",
    icon: Home,
    color: "bg-blue-100 text-blue-600",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Hôtels",
    description: "Une sélection des meilleurs hôtels pour vos voyages d'affaires ou de loisirs.",
    icon: Building2,
    color: "bg-purple-100 text-purple-600",
    gradient: "from-purple-500 to-indigo-400",
  },
  {
    title: "Restauration",
    description: "Découvrez les meilleures tables et saveurs de la ville.",
    icon: UtensilsCrossed,
    color: "bg-orange-100 text-orange-600",
    gradient: "from-orange-500 to-amber-400",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ServicesShowcase() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-black mb-4"
          >
            Tout ce dont vous avez besoin
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Une gamme complète de services pour simplifier votre quotidien, accessible en un clin d'œil.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full border-2 border-transparent hover:border-black/5 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                {/* Hover Gradient Background */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon size={28} />
                  </div>
                  <CardTitle className="text-2xl text-black group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground mb-6 line-clamp-3">
                    {service.description}
                  </CardDescription>
                  
                  <div className="flex items-center text-primary font-medium  -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <h2 className="text-black">Découvrir</h2><ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
