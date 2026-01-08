

import AboutHeroNew from "@/components/about/AboutHeroNew";

import OurStoryExcellence from "@/components/about/OurStoryExcellence";
import VisionMissionValues from "@/components/about/ThreeCardsVMV";

import WhoWeAreNew from "@/components/about/WhoWeAreNew";

import WhyChooseNew from "@/components/about/WhyChooseNew";
import OurClients from "@/components/home/OurClients";

import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";
import Sectionone from "@/components/Section/Sectionone";
import SectionTwo from "@/components/Section/SectionTwo";


export default function AboutPage() {
  return (
 <>

<NewHeader/>
{/* <AboutHeroNew/> */}

{/* <OurStoryExcellence/> */}
{/* <Sectionone/>
<WhoWeAreNew/> */}
<Sectionone/>
<SectionTwo/>
<WhoWeAreNew/>
<VisionMissionValues/>
  <WhyChooseNew/>
  <OurClients/>
  
<NewFooter/>
  


  </>
   )
}
