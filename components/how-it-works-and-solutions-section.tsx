"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HowItWorksAndSolutionsSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  const imageGridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const imageItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full">
      {/* Como funciona? Section */}
      <motion.section
        id="como-funciona" // Added ID for navigation
        className="bg-white text-gray-800 py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div variants={itemVariants} className="lg:w-1/2 max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona? <br />
            <span className="text-accent-blue">Sem limites</span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            Nosso processo é simples e pessoal: desde o primeiro contato, você sente que está lidando com um parceiro de
            confiança, não com uma empresa genérica. Entendemos sua necessidade com profundidade, propomos soluções
            personalizadas e acompanhamos tudo de perto até a entrega final sempre com excelência, lealdade e qualidade.
          </p>
        </motion.div>
        <motion.div variants={imageGridVariants} className="lg:w-1/2 grid grid-cols-2 gap-4 max-w-2xl">
          <motion.div variants={imageItemVariants} className="col-span-2">
            <Image
              src="/images/people-working-2.jpg"
              alt="Pessoas em reunião"
              width={800}
              height={450}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
          <motion.div variants={imageItemVariants}>
            <Image
              src="/images/people-working-1.jpg"
              alt="Pessoas trabalhando em laptops"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
          <motion.div variants={imageItemVariants}>
            <Image
              src="/images/people-working-3.jpg"
              alt="Pessoas trabalhando em laptops"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Soluções que Impulsionam negócios Section */}
      <motion.section
        className="bg-primary-background text-primary-foreground py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div variants={imageGridVariants} className="lg:w-1/2 grid grid-cols-2 gap-4 max-w-2xl">
          <motion.div variants={imageItemVariants}>
            <Image
              src="/images/solutions1.jpg"
              alt="Pessoas colaborando"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
          <motion.div variants={imageItemVariants}>
            <Image
              src="/images/solutions3.jpg"
              alt="Aperto de mãos"
              width={400}
              height={250}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} className="lg:w-1/2 max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluções que <span className="text-accent-blue">Impulsionam negócios</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
            Na KLM CORP, desenvolvemos softwares sob medida com foco total na dor do cliente. Acreditamos que a
            tecnologia deve ser funcional, elegante e transparente é exatamente isso que entregamos.
          </p>
          <ul className="space-y-3 mb-8 text-lg md:text-xl text-gray-200">
            <motion.li variants={itemVariants} className="flex items-center gap-2">
              <Image src="/icons/Seta.svg" alt="Seta" width={20} height={20} className="h-auto" />
              E-commerce
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-center gap-2">
              <Image src="/icons/Seta.svg" alt="Seta" width={20} height={20} className="h-auto" />
              Sites institucionais
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-center gap-2">
              <Image src="/icons/Seta.svg" alt="Seta" width={20} height={20} className="h-auto" />
              Aplicações web e mobile
            </motion.li>
          </ul>
          <motion.div variants={itemVariants}>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Entrar em contato
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}
