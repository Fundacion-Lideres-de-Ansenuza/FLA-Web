import Image from 'next/image'

const equipoJunto = "/images/about_us/PrimeraGrandeFla.png"
const equipoFeliz = "/images/about_us/SegundaFlaGrande.png"
const chicosSonriendo = "/images/about_us/TerceraFlaGrande.png"

function EnjoyFla() {
  return (
    <section className="px-0 py-2">
      <div className="mb-8 text-center">
        <span className="inline-flex rounded-full bg-[#f45e5e] px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg">
          Vida en FLA
        </span>
        <h3 className="mt-4 text-[34px] md:text-[42px] font-contrail-one text-[#160101]">
          Lo que significa ser parte
        </h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="overflow-hidden rounded-[30px]">
          <Image
            src={equipoJunto}
            alt="Equipo junto"
            width={1562}
            height={860}
            className="h-full w-full rounded-[24px] object-cover shadow-[0_18px_40px_rgba(144,20,14,0.05)]"
          />
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[30px]">
            <Image
              src={equipoFeliz}
              alt="Equipo feliz"
              width={900}
              height={620}
              className="h-full w-full rounded-[24px] object-cover shadow-[0_18px_40px_rgba(144,20,14,0.05)]"
            />
          </div>
          <div className="overflow-hidden rounded-[30px]">
            <Image
              src={chicosSonriendo}
              alt="Chicos sonriendo"
              width={900}
              height={620}
              className="h-full w-full rounded-[24px] object-cover shadow-[0_18px_40px_rgba(144,20,14,0.05)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnjoyFla
