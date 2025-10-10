import Link from "next/link";

export default function Testimonials() {
  const testimonials = [
    {
      title:
        "“Está decidida a no abandonarlos”: la lucha de una adolescente en la provincia con más suicidios del país",
      url: "https://www.lanacion.com.ar/comunidad/esta-decidida-a-no-abandonarlos-la-lucha-de-una-adolescente-en-la-provincia-con-mas-suicidios-del-nid29042025/",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Historias de Éxito
        </h2>
        <div className="flex justify-center">
          {testimonials.map((testimonial, index) => (
            <Link href={testimonial.url} key={index}>
              <div className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 max-w-lg">
                <h3 className="text-xl font-bold text-gray-800">
                  {testimonial.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}