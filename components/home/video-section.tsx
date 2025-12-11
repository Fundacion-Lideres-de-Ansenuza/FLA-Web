import Link from "next/link"

export default function VideoSection() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Gfm67bIW8T0"
              title="Video de nuestra historia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          </div>

        <div className="mt-6">
            <Link 
              href="/nuestra-historia"
            className="group w-full bg-[#90130d] hover:bg-[#a01810] transition-colors duration-300 px-4 sm:px-6 md:px-8 py-4 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl rounded-2xl"
            >
            <div className="flex items-center gap-2">
              <div className="w-6 h-3 bg-[#bc2222] rounded-full"></div>
              <div className="w-10 h-3 bg-[#f45e5e] rounded-full"></div>
              </div>
              
            <span className="text-white font-contrail font-bold text-base sm:text-lg md:text-xl">
                Conocé nuestra historia
              </span>
            </Link>
        </div>
      </div>
    </section>
  )
}
