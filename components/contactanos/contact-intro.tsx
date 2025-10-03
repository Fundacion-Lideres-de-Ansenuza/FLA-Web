import { JSX } from "react"

export default function ContactIntro(): JSX.Element {
  return (
    <div className="px-4 py-16">
      <div className="max-w-[1535px] mx-auto text-center">
        <h1 className="font-contrail-one text-black text-6xl md:text-7xl mb-8">
          CONTÁCTANOS
        </h1>
        <p className="font-arimo text-black text-xl md:text-2xl max-w-4xl mx-auto">
          ¿Querés ser parte del cambio? ¿Tenés preguntas sobre nuestros programas?
          ¿Querés colaborar con nosotros? Estamos aquí para escucharte.
        </p>
      </div>
    </div>
  )
}
