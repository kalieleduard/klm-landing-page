"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function TailoredSolutionsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.section
      id="solucoes-sob-medida" // Added ID for navigation
      className="bg-primary-background text-primary-foreground min-h-screen py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <motion.div variants={itemVariants} className="lg:w-1/2 max-w-xl text-center lg:text-left">
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
          Soluções <span className="text-accent-blue">Sob Medida</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Na KLM CORP, cada projeto é único. Desenvolvemos softwares personalizados que se encaixam perfeitamente nas
          suas necessidades, utilizando as tecnologias mais robustas e modernas do mercado para garantir inovação e
          eficiência.
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
      <motion.div variants={itemVariants} className="lg:w-1/2 max-w-2xl text-center lg:text-left">
        <motion.p variants={itemVariants} className="text-lg text-gray-300 mt-6 mb-6">
          Nossas principais stacks
        </motion.p>
        <motion.div
          className="flex justify-center items-center gap-8 flex-wrap max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={logoVariants}>
            <Image src="/icons/flutter_logo.svg" alt="Flutter Logo" width={100} height={30} className="h-auto" />
          </motion.div>
          <motion.div variants={logoVariants}>
            <Image src="/icons/kotlin_logo.svg" alt="Kotlin Logo" width={80} height={30} className="h-auto" />
          </motion.div>
          <motion.div variants={logoVariants}>
            <Image src="/icons/docker_logo.svg" alt="Docker Logo" width={80} height={30} className="h-auto" />
          </motion.div>
          <motion.div variants={logoVariants}>
            <Image src="/icons/amazon_web_services_logo.svg" alt="AWS Logo" width={80} height={30} className="h-auto" />
          </motion.div>
          <motion.div variants={logoVariants}>
            <Image src="/icons/react_logo.svg" alt="React Logo" width={50} height={45} className="h-auto" />
          </motion.div>
          <motion.div variants={logoVariants}>
            <Image src="/icons/java_logo.svg" alt="Java Logo" width={40} height={55} className="h-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
