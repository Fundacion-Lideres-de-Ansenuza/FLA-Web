"use client"

import { JSX } from "react"
import { motion } from "framer-motion"
import ContactIntro from "../../components/contactanos/contact-intro"
import ContactForm from "../../components/contactanos/contact-form"
import ContactInfo from "../../components/contactanos/contact-info"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Contactanos(): JSX.Element {
  return (
    <main className="min-h-screen bg-white container mx-auto px-4 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <ContactIntro />
      </motion.div>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactInfo />
        </motion.div>
      </div>
    </main>
  )
}
