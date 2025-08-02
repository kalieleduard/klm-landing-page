"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AutomationAISecion() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      id="automacao-ia" // Added ID for navigation
      className="bg-primary-background text-primary-foreground min-h-screen py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div variants={itemVariants} className="lg:w-1/2 max-w-2xl">
        <Image
          src="/images/solutions1.jpg" // Usando uma imagem existente, pode ser substituída por uma mais relevante
          alt="Automação e IA"
          width={800}
          height={500}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </motion.div>
      <motion.div variants={itemVariants} className="lg:w-1/2 max-w-xl text-center lg:text-right">
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
          Automação e <span className="text-accent-blue">Inteligência Artificial</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Transformamos seus processos com soluções inteligentes. Desde a automação de tarefas repetitivas até a
          implementação de sistemas de IA que aprendem e otimizam, garantimos que seu negócio opere com máxima
          eficiência e inovação.
        </motion.p>
        <motion.div variants={itemVariants} className="mt-10">
          <Button
            onClick={() => scrollToSection("como-funciona")} // Links to "Como funciona?" section
            className="bg-accent-blue hover:bg-blue-700 text-white px-6 py-2 rounded-md text-base font-normal transition-colors"
          >
            Saiba Mais
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
