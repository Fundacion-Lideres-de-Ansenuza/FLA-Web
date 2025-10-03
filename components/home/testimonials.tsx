import Image from "next/image"

type Testimonial = {
  name: string;
  content: string;
}

type TestimonialsDictionary = {
  title: string;
  items: Testimonial[];
}

interface TestimonialsProps {
  dictionary: TestimonialsDictionary;
}

export default function Testimonials({ dictionary }: TestimonialsProps) {
  const testimonials = dictionary.items.map((item, index) => ({
    ...item,
    avatar: "/images/IMG_0621-min.png",
    bgColor: index % 2 === 0 ? "#f45e5f" : "#bc2222"
  }));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-8 tracking-wide font-saridona">{dictionary.title}</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-6">
            <Image
              src="/images/TESTIMONIO_1CUT.png"
              alt="Testimonio 1"
              width={200}
              height={100}
              className="rounded-3xl w-full h-[200px] sm:h-[300px] md:h-[400px] shadow-lg object-cover"
            />
            <div className="grid grid-cols-2 gap-6 justify-center items-center">
              <Image
                src="/images/TESTIMONIO_2.png"
                alt="Testimonio 2"
                width={200}
                height={200}
                className="rounded-2xl w-full h-[200px] sm:h-[300px] md:h-[350px] shadow-lg object-cover"
              />
              <Image
                src="/images/TESTIMONIO_3_MIN.png"
                alt="Testimonio 3"
                width={200}
                height={200}
                className="rounded-2xl w-full h-[200px] sm:h-[300px] md:h-[350px] shadow-lg object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative flex items-center">
                <div 
                  className="text-white p-8 rounded-2xl shadow-md w-full font-saridona"
                  style={{ backgroundColor: testimonial.bgColor }}
                >
                  <p className="text-sm leading-relaxed mb-4">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3 object-cover"
                    />
                    <span className="font-semibold">{testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
