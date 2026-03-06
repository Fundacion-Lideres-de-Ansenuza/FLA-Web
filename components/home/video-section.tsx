import Link from "next/link"

export default function VideoSection() {
  return (
    <section className="py-7 sm:py-8 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[32px] overflow-hidden border border-[#eed3d3] bg-white p-2 shadow-[0_24px_60px_rgba(144,20,14,0.08)] sm:p-3">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-[24px]"
              src="https://www.youtube.com/embed/Gfm67bIW8T0"
              title="Video de nuestra historia"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>


        <div className="mt-6 flex justify-center">
          <Link
            href="/quienes-somos"
            className="relative group px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden before:absolute before:inset-0 before:bg-white/10 before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500"
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
