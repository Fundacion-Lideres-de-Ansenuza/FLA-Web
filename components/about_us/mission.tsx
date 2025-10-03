import Image from "next/image";
import { JSX } from "react";

const girlTeaching : string = "/images/about_us/girlTeaching.png"

type MissionDictionary = {
  title: string;
  description: string;
}

interface MissionProps {
  dictionary: MissionDictionary;
}

export default function Mission({ dictionary }: MissionProps): JSX.Element {
  return (
    <div className="px-4 py-8">
      <div className="max-w-[1020px] bg-[#bc2222] h-[92px] rounded-[80px] mb-8 flex items-center justify-start mr-auto">
        <p className="font-contrail-one text-[#ffffff] text-[55.15px] ml-[30px]">{dictionary.title}</p>
      </div>
      <section className="flex justify-around items-center  font-['Arimo:Regular',_sans-serif] font-normal text-[#160101] text-[40px] ">
        <Image src={girlTeaching} alt="girl teaching in fla" width={415} height={357} className="mb-8 mr-auto" />
        <article className="max-w-[60%]">
            <p className="mb-0 text-justify">{dictionary.description}</p>
        </article>
      </section>
    </div>
  );
}
