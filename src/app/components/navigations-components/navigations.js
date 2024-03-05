import Image from "next/image";
import bannerImage from "../../../assets/images/logo.png"

export default function Navigations() {
    return (
        <div className="bg-[#fff] rounded-full px-[1.5em] py-[0.7em] flex justify-between items-center">
            <Image src={bannerImage} alt="banner image" className="w-[14em]"/>
            <div className="flex items-center gap-[1.5em] pr-[1em]">
                <a href="/" className="bg-[#7b5df9] py-[0.3em] px-[0.6em] rounded-full text-[#fff] font-medium">Home</a>
                <a href="/" className="font-medium">Explore</a>
                <a href="" className="font-medium">Item Details</a>
                <a href="" className="font-medium">Author</a>
                <a href="/" className="font-medium">Create Yours</a>
            </div>
        </div>
    );
}