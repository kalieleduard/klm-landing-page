"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function TechnologiesSection() {
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
      className="bg-primary-background text-primary-foreground py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div variants={itemVariants} className="lg:w-1/2 max-w-xl text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Tecnologias para <br />
          <span className="text-accent-blue">Construir o futuro</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Nosso diferencial? A proximidade com o cliente e o compromisso de entregar um produto final impecável, como se
          fosse feito por um amigo de longa data. Nada de soluções genéricas, burocracia ou promessas vazias.
        </p>
        <motion.div variants={itemVariants}>
          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-accent-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Entrar em contato
          </Button>
        </motion.div>
      </motion.div>
      <motion.div variants={itemVariants} className="lg:w-1/2 max-w-2xl">
        <Image
          src="/images/table.jpg"
          alt="Pessoas trabalhando em uma mesa"
          width={800}
          height={500}
          className="rounded-lg shadow-lg object-cover w-full h-auto"
        />
      </motion.div>
    </motion.section>
  )
}
