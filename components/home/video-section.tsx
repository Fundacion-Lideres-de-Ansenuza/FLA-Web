import Link from "next/link"

export default function VideoSection() {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
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


        <div className="mt-8 flex justify-center">
          <Link
            href="/quienes-somos"
            className="relative group px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500"
          >
            <span className="relative text-white text-xl md:text-2xl font-contrail tracking-wide">
              Conocé nuestra historia
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
