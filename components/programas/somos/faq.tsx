import Accordion from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "¿Hay límite de edad?",
      answer: "Te podés anotar si tenés entre 15 a 19 años y sos estudiante de colegio secundario en alguna provincia de Argentina.",
    },
    {
      question: "¿Hay algún costo monetario?",
      answer: "NINGUNO. El programa es totalmente gratuito.",
    },
    {
        question: "¿Hay algún requisito que cumplir para anotarme?",
        answer: "Tener muchas ganas de aprender sobre diversidad, liderazgo y autoconocimiento, y de contribuir a una sociedad más justa e inclusiva realizando una acción de impacto en tu comunidad."
    },
    {
        question: "¿Qué temáticas de diversidad se trabajan en el programa?",
        answer: "Diversidad cultural, corporal, funcional, de género, sexual, religiosa, político partidaria."
    },
    {
        question: "¿Es necesario realizar una acción de impacto para egresar?",
        answer: "¡Si! Es requisito fundamental realizar una acción de impacto para finalizar el programa. Para eso, contarás con material exclusivo y el apoyo del staff durante todo el proceso."
    },
    {
        question: "¿Cómo me anoto?",
        answer: (<span>Completando el formulario de inscripción que encontrarás en el siguiente link <a href="#" className="text-blue-600 hover:underline">aquí</a>.</span>)
    }
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              {faq.answer}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}