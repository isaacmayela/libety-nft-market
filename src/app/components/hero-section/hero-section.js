// import heroBanner from "../../../assets/images/banner-bg.jpg"
import Navigations from "../navigations-components/navigations";
import HeroDescription from "../hero-description/hero-description";

export default function HeroSection() {
    return (
      <div className="bg-[url('/assets/images/banner-bg.jpg')] py-[2em] px-[7em]">
        <Navigations/>
        <HeroDescription/>
      </div>
    );
}