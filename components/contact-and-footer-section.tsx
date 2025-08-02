"use client"

import type React from "react"
import { useState, useEffect } from "react"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input" // Import Input component

export default function ContactAndFooterSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [phoneValue, setPhoneValue] = useState("")
  const [emailError, setEmailError] = useState("")
  const [descriptionError, setDescriptionError] = useState("")

  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  }

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6 
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: -20,
      transition: { duration: 0.3 } 
    }
  }

  // Phone mask function
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, '')
    
    // Apply mask based on length
    if (numbers.length <= 2) {
      return `(${numbers}`
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else if (numbers.length <= 11) {
      // For 11 digits (mobile): (XX) XXXXX-XXXX
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    } else {
      // Limit to 11 digits
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value)
    setPhoneValue(formatted)
  }

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    if (email && !validateEmail(email)) {
      setEmailError("Por favor, insira um email válido")
    } else {
      setEmailError("")
    }
  }

  // Description validation
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const description = e.target.value
    if (description.length > 0 && description.length < 20) {
      setDescriptionError(`Descrição deve ter pelo menos 20 caracteres (${description.length}/20)`)
    } else {
      setDescriptionError("")
    }
  }

  // Auto-close success modal after 4 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false)
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [isSubmitted])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget as HTMLFormElement)
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const projectDescription = formData.get("projectDescription") as string

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Por favor, insira um email válido")
      setIsSubmitting(false)
      return
    }

    // Validate description length
    if (projectDescription.length < 20) {
      setDescriptionError(`Descrição deve ter pelo menos 20 caracteres (${projectDescription.length}/20)`)
      setIsSubmitting(false)
      return
    }

    // Clear any existing errors
    setEmailError("")
    setDescriptionError("")

    // Remove formatting from phone number (keep only numbers)
    const cleanPhone = phone.replace(/\D/g, '')

    const payload = {
      name,
      company: company || "", // Optional field
      email,
      phone: cleanPhone,
      project_description: projectDescription
    }

    try {
      const response = await fetch('https://klmcorp.app.n8n.cloud/webhook/send-lead-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      console.log('Form submitted successfully:', payload)
      
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form
      const form = e.currentTarget as HTMLFormElement
      if (form) {
        form.reset()
      }
      setPhoneValue("") // Clear phone mask state
      setEmailError("") // Clear email validation error
      setDescriptionError("") // Clear description validation error
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      // You could add error handling here, like showing an error message
      alert('Erro ao enviar formulário. Tente novamente.')
    }
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
                onChange={handleEmailChange}
                className={`w-full bg-[#0A1128] border text-gray-200 placeholder:text-gray-500 focus:ring-accent-blue focus:border-accent-blue ${
                  emailError ? 'border-red-500 focus:border-red-500' : 'border-gray-700'
                }`}
                required
              />
              {emailError && (
                <p className="text-red-400 text-sm mt-1">{emailError}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Qual seu número de contato?
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={phoneValue}
                onChange={handlePhoneChange}
                placeholder="(XX) XXXXX-XXXX"
                className="w-full bg-[#0A1128] border border-gray-700 text-gray-200 placeholder:text-gray-500 focus:ring-accent-blue focus:border-accent-blue rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-blue/50"
                maxLength={15}
              />
            </div>
            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-300 mb-1">
                Descreva o seu projeto (mínimo 20 caracteres)
              </label>
              <Textarea
                id="projectDescription"
                name="projectDescription"
                placeholder="Descreva aqui seu projeto com pelo menos 20 caracteres..."
                onChange={handleDescriptionChange}
                className={`w-full bg-[#0A1128] border text-gray-200 placeholder:text-gray-500 focus:ring-accent-blue focus:border-accent-blue min-h-[120px] ${
                  descriptionError ? 'border-red-500 focus:border-red-500' : 'border-gray-700'
                }`}
                required
              />
              {descriptionError && (
                <p className="text-red-400 text-sm mt-1">{descriptionError}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-blue hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </motion.div>
      </motion.section>

      {/* Success Animation Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 mx-4 max-w-md w-full text-center shadow-2xl"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>
              
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Mensagem Enviada!
              </motion.h3>
              
              <motion.p
                className="text-gray-600 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Obrigado pelo seu interesse! Entraremos em contato em breve para discutir seu projeto.
              </motion.p>
              
              <motion.div
                className="flex items-center justify-center text-sm text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Esta mensagem será fechada automaticamente
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
