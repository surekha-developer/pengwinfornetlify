import AboutCompany from "@/components/about/AboutCompany";
import AboutHeroNew from "@/components/about/AboutHeroNew";
import Carousels from "@/components/about/Carousels";
import CutImage from "@/components/about/Dummy";
import Dummy from "@/components/about/Dummy";
import OurStoryExcellence from "@/components/about/OurStoryExcellence";
import VisionMissionValues from "@/components/about/ThreeCardsVMV";
import WhoWeAre from "@/components/about/WhoAreWe";
import WhoWeAreNew from "@/components/about/WhoWeAreNew";
import WhyChooseUs from "@/components/about/WhyChoose";
import WhyChooseNew from "@/components/about/WhyChooseNew";
import Footer from "@/components/layout/Footer";

import Header from "@/components/layout/Header";


export default function AboutPage() {
  return (

 
  <>
<Header/>
<AboutHeroNew/>
<OurStoryExcellence/>

<WhoWeAreNew/>
<VisionMissionValues/>
  <WhyChooseNew/>
  

  

  {/* //........... */}
{/* <Dummy/> */}
 {/* <CutImage
        image="/whoweareNew.jpg"
        width={350}
        height={100}
      /> */}
 
  {/* <Carousels/> */}
  
  {/* <WhyChooseUs/> */}
  <Footer/>

  {/* //........... */}

   {/* <AboutCompany/>
  <WhoWeAre/> */}
  </>
   )
}
