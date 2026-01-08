import OurClients from "@/components/home/OurClients";

import NewFooter from "@/components/layout/NewFooter";
import NewHeader from "@/components/layout/NewHeaderBluebg";

import MiddleWareHero from "@/components/services/MiddleWareHero";
import MiddleWareThree from "@/components/services/MiddleWareThree";
import WouldConnect from "@/components/services/WouldConnect";

export default function ServicesMiddleWare() {
  return (

 
  <>

<NewHeader/>
{/* <MiddleWareHero/> */}

<MiddleWareThree/>
<WouldConnect/>
<OurClients/>
<NewFooter/>
  </>
   )
}