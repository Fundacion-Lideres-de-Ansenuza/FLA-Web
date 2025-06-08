import { Play } from "lucide-react"
import Image from "next/image"

export default function VideoSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Video sobre nuestra historia"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border-4 border-red-600">
                <Play className="h-8 w-8 text-red-600 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
