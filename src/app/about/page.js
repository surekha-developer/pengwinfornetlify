

import AboutHeroNew from "@/components/about/AboutHeroNew";
import AboutTopSection from "@/components/about/AboutTopSection";

import OurStoryExcellence from "@/components/about/OurStoryExcellence";
import VisionMissionValues from "@/components/about/ThreeCardsVMV";

import WhoWeAreNew from "@/components/about/WhoWeAreNew";

import WhyChooseNew from "@/components/about/WhyChooseNew";
import OurClients from "@/components/home/OurClients";

import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";
import Sectionone from "@/components/Section/Sectionone";
import SectionTwo from "@/components/Section/SectionTwo";
import SectionHeader from "@/components/SectionHeader/SectionHeader";


export default function AboutPage() {
  return (
 <>

<NewHeader/>
{/* <AboutHeroNew/> */}

{/* <OurStoryExcellence/> */}
{/* <Sectionone/>
<WhoWeAreNew/> */}
{/* <SectionHeader/> */}
<AboutTopSection/>
{/* <Sectionone/>
<SectionTwo/> */}
<WhoWeAreNew/>
<VisionMissionValues/>
  <WhyChooseNew/>
  <OurClients/>
  
<NewFooter/>
  


  </>
   )
}
