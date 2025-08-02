"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBeamDemo } from "./default-animated-bean"

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
      id="automacao-ia"
      className="bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900 min-h-screen w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      {/* Background decoration for light theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-blue-400/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      <motion.div variants={itemVariants} className="w-full lg:w-1/2 max-w-4xl relative z-10">
        <motion.div 
          variants={itemVariants} 
          className="bg-gradient-to-r from-white/80 to-gray-100/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-10 xl:p-12 border border-gray-200/50 shadow-2xl"
        >
          <motion.div variants={itemVariants} className="text-center mb-6 md:mb-8 lg:mb-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Automação Inteligente</h3>
            <p className="text-lg md:text-xl text-gray-600">Transformação digital com IA</p>
          </motion.div>
          
         <AnimatedBeamDemo />
        </motion.div>
      </motion.div>
      <motion.div variants={itemVariants} className="w-full lg:w-1/2 max-w-2xl text-center lg:text-right relative z-10">
        <motion.div 
          variants={itemVariants} 
          className="inline-block bg-gradient-to-r from-accent-blue/20 to-blue-400/20 rounded-full px-4 py-2 mb-6"
        >
          <span className="text-accent-blue text-sm font-medium">Inovação Tecnológica</span>
        </motion.div>
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-accent-blue bg-clip-text text-transparent leading-tight">
          Automação e <span className="text-accent-blue">Inteligência Artificial</span>
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 md:mb-10 leading-relaxed">
          Transformamos seus processos com <span className="text-accent-blue font-semibold">soluções inteligentes</span>. Desde a automação de tarefas repetitivas até a
          implementação de sistemas de IA que aprendem e otimizam, garantimos que seu negócio opere com máxima
          <span className="text-accent-blue"> eficiência</span> e <span className="text-accent-blue">inovação</span>.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mb-8 md:mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
              <h4 className="font-semibold text-gray-900 mb-2">Redução de Custos</h4>
              <p className="text-sm text-gray-600">Menos gastos operacionais</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
              <h4 className="font-semibold text-gray-900 mb-2">Velocidade</h4>
              <p className="text-sm text-gray-600">10x mais rápido que processos manuais</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
              <h4 className="font-semibold text-gray-900 mb-2">Precisão</h4>
              <p className="text-sm text-gray-600">Acurácia nos resultados</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
              <h4 className="font-semibold text-gray-900 mb-2">Crescimento</h4>
              <p className="text-sm text-gray-600">Escalabilidade ilimitada</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-12">
          <Button
            onClick={() => scrollToSection("como-funciona")}
            className="bg-gradient-to-r from-accent-blue to-blue-600 hover:from-blue-600 hover:to-accent-blue text-white px-8 md:px-12 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-blue/25"
          >
            Ver Como Funciona
          </Button>
          <Button
            onClick={() => scrollToSection("contato")}
            className="border-2 border-accent-blue/50 text-accent-blue hover:bg-accent-blue hover:text-white px-8 md:px-12 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium transition-all duration-300 bg-transparent backdrop-blur-sm"
          >
            Solicitar Demo
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
