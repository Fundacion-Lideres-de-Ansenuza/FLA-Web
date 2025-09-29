import { JSX } from "react"

export default function ContactIntro(): JSX.Element {
  return (
    <div className="px-4 py-16">
      <div className="max-w-[1535px] mx-auto text-center">
        <h1 className="font-contrail-one text-[#000000] text-[96px] mb-8">
          CONTÁCTANOS
        </h1>
        <p className="font-['Arimo:Regular',_sans-serif] font-normal text-[#000000] text-[36px] max-w-4xl mx-auto">
          ¿Quieres ser parte del cambio? ¿Tienes preguntas sobre nuestros programas?
          ¿Quieres colaborar con nosotros? Estamos aquí para escucharte.
        </p>
      </div>
    </div>
  )
}
