import Image from "next/image";
import blockChainIcon from "../../../assets/images/icon-01.png"

export default function CategoriesItems({src, description}) {
    return (
      <div className="text-[#fff] bg-[#282b2f] p-[2em] flex flex-col items-center rounded-[10px] border-[1px] border-[#5e5e5e] border-solid gap-[1em]">
        <Image src={blockChainIcon} alt="image description" className="bg-[#fff] p-[0.7em] w-[3.5em] rounded-full"/>
        <p className="text-[1.3em] font-semibold">{description}</p>
      </div>
    );
}