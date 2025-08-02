"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input" // Import Input component

export default function ContactAndFooterSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  // Placeholder for form submission (can be replaced with a Server Action later)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const name = formData.get("name")
    const company = formData.get("company")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const projectDescription = formData.get("projectDescription")

    console.log({ name, company, email, phone, projectDescription })
    alert("Formulário enviado! (Verifique o console para os dados. Funcionalidade de envio real a ser implementada)")
    // Here you would typically call a Server Action or API route
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="w-full">
      {/* Contact Form Section */}
      <motion.section
        id="contato" // Added ID for navigation
        className="bg-primary-background text-primary-foreground py-16 px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.div variants={itemVariants} className="lg:w-1/2 max-w-xl text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos conhecer <br />
            <span className="text-accent-blue">Seus desafios.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Preencha a solicitação para que possamos agendar um horário e conversarmos sobre seu projeto. Se preferir,
            nos envie um e-mail{" "}
            <a href="mailto:klmcorp2025@gmail.com" className="text-accent-blue hover:underline">
              klmcorp2025@gmail.com
            </a>
          </p>
        </motion.div>
        <motion.div
          id="contact-form" // Added ID for scrolling to the form itself
          variants={itemVariants}
          className="lg:w-1/2 max-w-md w-full bg-[#1A233A] p-8 rounded-lg shadow-xl"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-6">Descreva seu projeto</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Como você gostaria de ser chamado(a)?
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome"
                className="w-full bg-[#0A1128] border border-gray-700 text-gray-200 placeholder:text-gray-500 focus:ring-accent-blue focus:border-accent-blue"
                required
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                Qual nome da sua empresa? (opcional)
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Nome da empresa"
                className="w-full bg-[#0A1128] border border-gray-700 text-gray-200 placeholder:text-gray-500 focus:ring-accent-blue focus:border-accent-blue"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Qual seu melhor email?
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu.email@exemplo.com"
                className="w-full bg-[#0A1128] border border-gray-700 text-gray-200 placeholder:text-gray-500 focus:ring-accent-blue focus:border-accent-blue"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Qual seu número de contato?
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(XX) XXXXX-XXXX"
                className="w-full bg-[#0A1128] border border-gray-700 text-gray-200 placeholder:text-gray-500 focus:ring-accent-blue focus:border-accent-blue"
                pattern="^$$\d{2}$$\s?\d{4,5}-\d{4}$"
                title="Por favor, insira um número de telefone válido no formato (XX) XXXXX-XXXX ou (XX) XXXX-XXXX"
              />
            </div>
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-300 mb-1">
                Descreva o seu projeto
              </label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                placeholder="Descreva aqui"
                className="w-full bg-[#0A1128] border border-gray-700 text-gray-200 placeholder:text-gray-500 focus:ring-accent-blue focus:border-accent-blue min-h-[120px]"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-accent-blue hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Enviar
            </Button>
          </form>
        </motion.div>
      </motion.section>

      {/* Final Call-to-Action / Footer Section */}
      <motion.section
        className="bg-[#0A1128] text-primary-foreground py-16 px-4 md:px-8 lg:px-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4">
          Não deixe seu sonho esperando <br />
          <span className="text-accent-blue">Vamos realizá-lo!</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          O nosso futuro depende apenas de nós, o futuro foi construído por pessoas corajosas, assim como nós somos!
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            onClick={scrollToForm}
            className="bg-accent-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Preencher formulário
          </Button>
          <Button
            onClick={scrollToForm}
            className="border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors bg-transparent"
          >
            Entrar em contato
          </Button>
        </motion.div>
      </motion.section>
    </div>
  )
}
