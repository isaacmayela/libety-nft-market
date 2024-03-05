import Image from "next/image";
import nftImages from "../../../assets/images/banner-02.png"

export default function HeroDescription() {
    return (
        <div className="grid grid-cols-[repeat(2,1fr)] gap-[5em] mt-[6em]">
            <div className="text-[#fff]">
                <h3 className="font-bold text-[1.2em]">Liberty NFT Market</h3>
                <h1 className="font-extrabold text-[2.7em] mb-[0.5em]">CREATE, SELL & COLLECT TOP NFT'S.</h1>
                <p className="mb-[2em]">Liberty NFT is a really cool and professional design for your NFT websites. This HTML, CSS template is based on Tailwind V6 and it is design for NFT related web portails. Liberty can be freely downloder from Templates'mod free css and Tailwind</p>
                <div className="flex items-center gap-[1em] text-[#fff]">
                    <button className="bg-opacity-0 border-[2px] border-[#7453fc] border-solid  p-[0.5em] rounded-full font-semibold">Explore Top NFTs</button>
                    <button className="bg-[#7453fc] py-[0.5em] px-[0.8em] rounded-full font-semibold">Watch Our videos</button>
                </div>
            </div>

            <div>
                <Image src={nftImages} alt="banner 02"/>
                <div className="flex items-center justify-center w-[30em] mt-[1.5em] gap-[1em]">
                    <button><i class="fa-solid fa-circle-arrow-left text-[2.5em] text-[#fff]"></i></button>
                    <button><i class="fa-solid fa-circle-arrow-right text-[2.5em] text-[#fff]"></i></button>
                </div>
            </div>

        </div>
    );
}