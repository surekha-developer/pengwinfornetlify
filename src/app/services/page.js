import OurClients from "@/components/home/OurClients";

import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";
import NewAllCardServices from "@/components/services/NewAllCardServices";
import NewServicesHero from "@/components/services/NewServicesHero";


export default function ServicesPage() {
  return (

 
  <>
  
  <NewHeader/>
  {/* <NewServicesHero/> */}

<NewAllCardServices/>
<OurClients/>

<NewFooter/>
  </>
   )
}
