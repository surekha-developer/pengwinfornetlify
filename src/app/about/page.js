


import AboutTopSection from "@/components/about/AboutTopSection";


import VisionMissionValues from "@/components/about/ThreeCardsVMV";

import WhoWeAreNew from "@/components/about/WhoWeAreNew";

import WhyChooseNew from "@/components/about/WhyChooseNew";
import OurClients from "@/components/home/OurClients";

import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";



export default function AboutPage() {
  return (
 <>

<NewHeader/>

<AboutTopSection/>

<WhoWeAreNew/>
<VisionMissionValues/>
  <WhyChooseNew/>
  <OurClients/>
  
<NewFooter/>
  


  </>
   )
}
