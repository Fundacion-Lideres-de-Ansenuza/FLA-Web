import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VideoSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
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

          <div className="absolute bottom-0 left-0 right-0">
            <Link 
              href="/nuestra-historia"
              className="group w-full bg-[#90130d] hover:bg-[#a01810] transition-colors duration-300 px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-start gap-2 sm:gap-4 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <div className="w-4 h-6 sm:w-6 sm:h-8 lg:w-9 lg:h-12 bg-[#bc2222] rounded-full"></div>
                <div className="w-8 h-6 sm:w-12 sm:h-8 lg:w-18 lg:h-12 bg-[#f45e5e] rounded-full"></div>
              </div>
              
              <span className="text-white font-contrail font-bold text-sm sm:text-lg md:text-xl lg:text-2xl ml-1 sm:ml-2">
                Conocé nuestra historia
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
