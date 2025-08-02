"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import HowItWorksAndSolutionsSection from "@/components/how-it-works-and-solutions-section"
import TechnologiesSection from "@/components/technologies-section"
import ContactAndFooterSection from "@/components/contact-and-footer-section"
import TailoredSolutionsSection from "@/components/tailored-solutions-section"
import AutomationAISecion from "@/components/automation-ai-section"

export default function Component() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
  }

  const wolfVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-primary-background text-primary-foreground flex flex-col items-center font-sans overflow-x-hidden relative">
      <motion.header
        className="w-full absolute top-0 left-0 flex justify-between items-center px-8 py-6 z-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex items-center">
          <Image src="/icons/klm-word-white-logo.svg" alt="KLM Logo" width={80} height={40} className="h-auto" />
        </motion.div>
        <motion.nav variants={itemVariants} className="flex space-x-6">
          <a
            href="#contato"
            onClick={() => scrollToSection("contato")}
            className="hover:text-blue-400 transition-colors"
          >
            Contato
          </a>
        </motion.nav>
      </motion.header>
      <motion.main
        className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 py-8 relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants} className="text-accent-blue text-lg font-medium mb-2">
          Software House
        </motion.p>
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold max-w-3xl leading-tight mb-14">
          Vamos <span className="text-accent-blue">construir o futuro</span> juntos
        </motion.h1>
        <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-300 max-w-2xl mb-14 mt-0">
          Criamos soluções sob medida que entendem seu negócio de verdade. Com automação e inteligência artificial,
          transformamos desafios em oportunidades, tornando seu dia a dia mais simples e seu crescimento,{" "}
          <span className="text-accent-blue">inevitável</span>.
        </motion.p>
        <motion.div variants={buttonVariants} className="flex flex-col sm:flex-row justify-center gap-4 my-0 py-0">
          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-accent-blue hover:bg-blue-700 text-white px-6 py-2 rounded-md text-base font-normal transition-colors"
          >
            Entrar em contato
          </Button>
          <Button
            onClick={() => scrollToSection("solucoes-sob-medida")}
            className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-6 py-2 rounded-md text-base font-normal transition-colors bg-transparent"
          >
            Soluções Sob Medida
          </Button>
          <Button
            onClick={() => scrollToSection("automacao-ia")}
            className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-6 py-2 rounded-md text-base font-normal transition-colors bg-transparent"
          >
            Automação e IA
          </Button>
        </motion.div>

        <motion.div
          className="mb-0 mt-20"
          initial="hidden"
          animate={{ y: [0, -10, 0] }} // Animação de flutuação
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} // Repete infinitamente
        >
          <Image src="/icons/wolf-blue.svg" alt="Blue Wolf Icon" width={250} height={200} className="h-auto" />
        </motion.div>
      </motion.main>
      <TailoredSolutionsSection />
      <AutomationAISecion />
      <HowItWorksAndSolutionsSection />
      <TechnologiesSection />
      <ContactAndFooterSection />
    </div>
  )
}
