import OurClients from "@/components/home/OurClients";
import ServicesList from "@/components/home/ServicesList";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NewFooter from "@/components/layout/NewFooter";
import NewServicesHero from "@/components/services/NewServicesHero";
import Services from "@/components/services/ServicesHeroSection";

export default function ServicesPage() {
  return (

 
  <>
  <Header/>
  <NewServicesHero/>
<Services/>

<OurClients/>

<NewFooter/>
  </>
   )
}
