import Image from 'next/image'

const equipoJunto = "/images/about_us/PrimeraGrandeFla.png"
const equipoFeliz = "/images/about_us/SegundaFlaGrande.png"
const chicosSonriendo = "/images/about_us/TerceraFlaGrande.png"

function EnjoyFla() {
  return (
    <section className="rounded-[34px] border border-[#f1d8d8] bg-white px-6 py-8 shadow-[0_22px_60px_rgba(144,20,14,0.06)] md:px-8 md:py-10">
      <div className="mb-8 text-center">
        <span className="inline-flex rounded-full bg-[#f45e5e] px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg">
          Vida en FLA
        </span>
        <h3 className="mt-4 text-[34px] md:text-[42px] font-contrail-one text-[#160101]">
          Lo que significa ser parte
        </h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[30px] border border-[#f4dddd] bg-[#fffafa] p-3">
          <Image
            src={equipoJunto}
            alt="Equipo junto"
            width={1562}
            height={860}
            className="h-full w-full rounded-[24px] object-cover"
          />
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[30px] border border-[#f4dddd] bg-[#fffafa] p-3">
            <Image
              src={equipoFeliz}
              alt="Equipo feliz"
              width={900}
              height={620}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-[30px] border border-[#f4dddd] bg-[#fffafa] p-3">
            <Image
              src={chicosSonriendo}
              alt="Chicos sonriendo"
              width={900}
              height={620}
              className="h-full w-full rounded-[24px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnjoyFla
