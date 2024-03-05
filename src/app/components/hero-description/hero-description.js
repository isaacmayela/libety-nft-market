import Image from "next/image";
import nftImages from "../../../assets/images/banner-02.png"

export default function HeroDescription() {
    return (
        <div className="grid grid-cols-[repeat(2,1fr)] gap-[2em]">
            <div className="">
                <h3 className="font-medium">Liberty NFT Market</h3>
                <h1 className="font-extrabold">CREATE, SELL & COLLECT TOP NFT'S.</h1>
                <p>Liberty NFT is a really cool and professional design for your NFT websites. This HTML, CSS template is based on Tailwind V6 and it is design for NFT related web portails. Liberty can be freely downloder from Templates'mod free css and Tailwind</p>
                <div className="flex items-center gap-[1em] text-[#fff]">
                    <button className="bg-opacity-0 border-[2px] border-[#7453fc] border-solid  p-[0.5em] rounded-full">Explore Top NFTs</button>
                    <button className="bg-[#7453fc] py-[0.5em] px-[0.8em] rounded-full">Watch Our videos</button>
                </div>
            </div>

            <div>
                <Image src={nftImages} alt="banner 02"/>
            </div>

        </div>
    );
}