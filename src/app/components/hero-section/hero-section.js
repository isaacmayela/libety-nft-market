// import heroBanner from "../../../assets/images/banner-bg.jpg"
import Navigations from "../navigations-components/navigations";
import HeroDescription from "../hero-description/hero-description";

export default function HeroSection() {
    return (
      <div className="bg-[#7b5df9] py-[1em] px-[7em]">
        <Navigations/>
        <HeroDescription/>
      </div>
    );
}