import HeroSection from "@/components/about/Dummy";
import EmpoweringSection from "@/components/home/Empowering";
// import Empowering from "@/components/home/Empowering";
import Hero from "@/components/home/Hero";
import HeroCarousel from "@/components/home/HeroCaro";
import NeedConsultation from "@/components/home/NeedConsultation";
import NewAboutHome from "@/components/home/NewAboutHome";
import NewHeroSection from "@/components/home/NewHero";
import NewServicesHome from "@/components/home/NewServicesHome";
import OurClients from "@/components/home/OurClients";
import OurStrengthNew from "@/components/home/ourStrengthNew";


import ServicesList from "@/components/home/ServicesList";
import StrengthsSection from "@/components/home/StrengthSection";
// import StrengthsSection from "@/components/home/StrengthSection";
// import StrengthCard from "@/components/home/StrengthCard";
// import StrengthsSection from "@/components/home/StrengthSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";



export default function Home() {
  return (
    
    <>
   {/* <Header/>
   <HeroCarousel />
     
       <OurStrengthNew/>
    
       <EmpoweringSection/>
     
      <OurClients/>
      <Footer/> */}
       {/* <HeroCarousel /> */}
      <NewHeroSection/>
      <NewAboutHome/>
       {/* <OurStrengthNew/> */}
       <NewServicesHome/>
       <NeedConsultation/>
        <EmpoweringSection/>
         
         <OurClients/>
         <Footer/>
     
      
    </>

  //    <>
  //  {/* <Header/> */}
  //  {/* <HeroCarousel /> */}
  //    {/* <Hero/> */}
  //      {/* <OurStrengthNew/> */}
  //     {/* <ServicesList /> */}
  //     {/* <EmpoweringSection/> */}
     
  //     {/* <StrengthsSection/> */}
  //     {/* <OurClients/>
  //     <Footer/> */}
      

  //     <HeroSection/>
  //   </>
  );
}
