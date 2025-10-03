import { JSX } from "react";
import Image from "next/image";

const girlVision = "/images/about_us/girlVision.png"

type VisionDictionary = {
  title: string;
  description: string;
}

interface VisionProps {
  dictionary: VisionDictionary;
}

export default function Vision({ dictionary }: VisionProps): JSX.Element {
  return (
    <div className="px-4 py-8">
      <div className="max-w-[1020px] bg-[#bc2222] h-[92px] rounded-[80px] mb-8 flex items-center justify-end ml-auto">
        <p className="font-['Contrail_One:Regular',_sans-serif] text-[#ffffff] text-[55.15px] mr-[30px]">{dictionary.title}</p>
      </div>
      <section className="flex justify-around items-center  font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[40px] ">
        <article className="max-w-[60%]">
            <p className="mb-0 text-justify">{dictionary.description}</p>
        </article>
        <Image src={girlVision} alt="girlVision" width={415} height={357} className="mb-8 ml-auto" />
      </section>
    </div>
  );
}
