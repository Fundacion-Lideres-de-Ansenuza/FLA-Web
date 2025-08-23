import Image from 'next/image'

const equipoJunto: string = "/images/about_us/PrimeraGrandeFla.png"
const equipoFeliz: string = "/images/about_us/SegundaFlaGrande.png"
const chicosSonriendo: string = "/images/about_us/TerceraFlaGrande.png"


function EnjoyFla() {
  return (
    <div className="mx-auto mb-8">
        <Image src={equipoJunto} alt="equipo" width={1562} height={200} className="w-full rounded-[80px] mb-8" />
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Image src={equipoFeliz} alt="equipo" width={500} height={200} className="w-3/4 h-auto object-cover rounded-[80px] mb-8" />
            <Image src={chicosSonriendo} alt="equipo" width={500} height={200} className="w-1/4 h-auto object-cover rounded-[80px]" />
        </div>
    </div>
  )
}

export default EnjoyFla