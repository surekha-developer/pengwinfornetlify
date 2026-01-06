// import ContactCards from "@/components/contactus/ContactCards";
import ContactHero from "@/components/contactus/ContactHeroSection";
import GetInTouch from "@/components/contactus/GetInTouch";
import GoogleMap from "@/components/contactus/GoogleMaps";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import NewFooter from "@/components/layout/NewFooter";

export default function ContactPage() {
  return (

 
  <>
{/* <hi>Contact page</hi> */}
<Header/>
<ContactHero/>
{/* <ContactCards/> */}
<GetInTouch/>
  <GoogleMap/>
  {/* <Footer/> */}
  <NewFooter/>
  </>
   )
}
