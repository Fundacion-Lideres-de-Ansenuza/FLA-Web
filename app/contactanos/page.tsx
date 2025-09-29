import { JSX } from "react"
import ContactIntro from "../../components/contactanos/contact-intro"
import ContactForm from "../../components/contactanos/contact-form"
import ContactInfo from "../../components/contactanos/contact-info"

export default function Contactanos(): JSX.Element {
  return (
    <main className="min-h-screen bg-white max-w-[90%] mx-auto">
      <ContactIntro />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <ContactForm />
        <ContactInfo />
      </div>
    </main>
  )
}
