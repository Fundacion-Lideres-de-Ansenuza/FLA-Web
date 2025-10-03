import type React from "react"
import Image from "next/image"

type Card = {
  title: string;
  description: string;
}

type WhyWeDoItDictionary = {
  title: string;
  cards: Card[];
}

interface WhyWeDoItProps {
  dictionary: WhyWeDoItDictionary;
}

const cardImages = [
  "/images/IMG_0745-min.png",
  "/images/TESTIMONIO_1CUT.png",
  "/images/IMG_0621-min.png",
]

export default function WhyWeDoIt({ dictionary }: WhyWeDoItProps): React.ReactElement {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-left mb-10 flex items-center">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 transform rotate-180 mr-2">?</h2>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">{dictionary.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <Image 
                src={cardImages[0]}
                alt={dictionary.cards[0].title}
                className="w-full h-full object-cover" 
                width={600}
                height={400}
              />
            </div>
            <div className="absolute inset-0 bg-red-600/80" />
            <div className="relative text-white p-10">
              <h3 className="text-5xl md:text-6xl leading-none">{dictionary.cards[0].title}</h3>
              <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl">
                {dictionary.cards[0].description}
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0">
              <Image 
                src={cardImages[1]}
                alt={dictionary.cards[1].title}
                className="w-full h-full object-cover" 
                width={600}
                height={400}
              />
            </div>
            <div className="absolute inset-0 bg-red-700/80" />
            <div className="relative text-white p-10">
              <h3 className="text-5xl md:text-6xl leading-none">{dictionary.cards[1].title}</h3>
              <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-xl">
                {dictionary.cards[1].description}
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0">
            <Image 
              src={cardImages[2]}
              alt={dictionary.cards[2].title}
              className="w-full h-full object-cover" 
              width={1200}
              height={600}
            />
          </div>
          <div className="absolute inset-0 bg-red-800/80" />
          <div className="relative text-white p-10">
            <h3 className="text-5xl md:text-6xl leading-none">{dictionary.cards[2].title}</h3>
            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-4xl">
              {dictionary.cards[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
