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
      id="solucoes-sob-medida"
      className="bg-gradient-to-br from-primary-background via-slate-900 to-primary-background text-primary-foreground min-h-screen w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-blue/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <motion.div variants={itemVariants} className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left relative z-10">
        <motion.div 
          variants={itemVariants} 
          className="inline-block bg-gradient-to-r from-accent-blue/20 to-blue-500/20 rounded-full px-4 py-2 mb-6"
        >
          <span className="text-accent-blue text-sm font-medium">Desenvolvimento Personalizado</span>
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-gray-100 to-accent-blue bg-clip-text text-transparent leading-tight">
          Soluções <span className="text-accent-blue">Sob Medida</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 leading-relaxed">
          Na <span className="text-accent-blue font-semibold">KLM CORP</span>, cada projeto é único. Desenvolvemos softwares personalizados que se encaixam perfeitamente nas
          suas necessidades, utilizando as tecnologias mais robustas e modernas do mercado para garantir <span className="text-accent-blue">inovação</span> e
          <span className="text-accent-blue"> eficiência</span>.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12 justify-center lg:justify-start">
          <Button
            onClick={() => scrollToSection("como-funciona")}
            className="bg-gradient-to-r from-accent-blue to-blue-600 hover:from-blue-600 hover:to-accent-blue text-white px-8 md:px-12 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-blue/25"
          >
            Saiba Mais
          </Button>
          <Button
            onClick={() => scrollToSection("contato")}
            className="border-2 border-accent-blue/50 text-accent-blue hover:bg-accent-blue hover:text-white px-8 md:px-12 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium transition-all duration-300 bg-transparent backdrop-blur-sm"
          >
            Fale Conosco
          </Button>
        </motion.div>
      </motion.div>
      <motion.div variants={itemVariants} className="w-full lg:w-1/2 max-w-4xl text-center lg:text-left relative z-10">
        <motion.div 
          variants={itemVariants} 
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-10 xl:p-12 border border-slate-700/50 shadow-2xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-6 md:mb-8 lg:mb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">Tecnologias de Ponta</h3>
            <p className="text-lg md:text-xl text-gray-400">Stack moderna para soluções robustas</p>
          </motion.div>
          
          <div className="overflow-hidden p-4 md:p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-slate-900/50 to-slate-800/50">
            <motion.div
              className="flex items-center gap-12 md:gap-16 w-max"
              animate={{ x: [0, -120 * 6] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set of logos */}
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/flutter_logo.svg" alt="Flutter Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/kotlin_logo.svg" alt="Kotlin Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/docker_logo.svg" alt="Docker Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/amazon_web_services_logo.svg" alt="AWS Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/react_logo.svg" alt="React Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/java_logo.svg" alt="Java Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              
              {/* Duplicate set for seamless loop */}
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/flutter_logo.svg" alt="Flutter Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/kotlin_logo.svg" alt="Kotlin Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/docker_logo.svg" alt="Docker Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/amazon_web_services_logo.svg" alt="AWS Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/react_logo.svg" alt="React Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
              <motion.div 
                variants={logoVariants} 
                className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                whileHover={{ y: -5 }}
              >
                <Image src="/icons/java_logo.svg" alt="Java Logo" width={80} height={80} className="h-auto filter brightness-110" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
