
// "use client";

// import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaTwitter,FaMapMarkerAlt, FaEnvelope, FaPhone  } from "react-icons/fa";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import Image from "next/image";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import styles from "../../styles/layout/footer.module.scss";

// export default function Footer() {
//   const services = [
//     "Fullstack Development",
//     "Apps",
//     "Web Application Development",
//     "Support & Maintenance",
//     "Industries",
//   ];

//   const middleware = [
//     "IBM API Connect",
//     "IBM DataPower",
//     "IBM App Connect Enterprise (ACE)",
//     "IBM Aspera",
//     "IBM Cloud Pak for Integration (CP4I)",
//     "IBM MQ",
//   ];

//   useEffect(() => {
//     AOS.init({ duration: 800, once: true, easing: "ease-out" });
//   }, []);

//   return (
//     <footer className={styles.footer}>
//       <div className={styles.footerContainer}>
//         {/* Section 1: Logo + highlight + social icons */}
//         <div className={styles.footerSection}>
//           <div className={styles.logo} data-aos="fade-up" data-aos-delay="0">
//             <Image src="/SimplifiedPengwinLogo.png" alt="Pengwin Tech Solutions" width={200} height={40} />
//           </div>

//           <p className={styles.highlight} data-aos="fade-up" data-aos-delay="100">
//             Our skilled team at Pengwin Tech Solutions ensures complete client
//             satisfaction by delivering high-quality solutions and providing 24/7
//             support throughout every stage of your project.
//           </p>

//           <div className={styles.socialIcons} data-aos="fade-up" data-aos-delay="200">
//             <a href="https://wa.me/919493323547" target="_blank" rel="noopener noreferrer">
//               <FaWhatsapp />
//             </a>
//             <a href="https://www.linkedin.com/company/pengwintech/" target="_blank" rel="noopener noreferrer">
//               <FaLinkedin />
//             </a>
//             <a href="https://www.instagram.com/pengwintech?igsh=NnR3cjVnN3l3NHNw" target="_blank" rel="noopener noreferrer">
//               <FaInstagram />
//             </a>
//             <a href="https://www.facebook.com/people/Pengwin-Tech-Solutions/61574496058132/" target="_blank" rel="noopener noreferrer">
//               <FaFacebook />
//             </a>
//             <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
//               <FaTwitter />
//             </a>
//           </div>
//         </div>

//         {/* Section 2: Services */}
//         <div className={styles.footerSection}>
//           <h4 data-aos="fade-up" data-aos-delay="0">Services</h4>
//           <ul>
//             {services.map((item, index) => (
//               <li key={index} data-aos="fade-up" data-aos-delay={100 + index * 50}>
//                 <MdKeyboardDoubleArrowRight className={styles.listIcon} />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Section 3: Middleware */}
//         <div className={styles.footerSection}>
//           <h4 data-aos="fade-up" data-aos-delay="0">Middleware Integration</h4>
//           <ul>
//             {middleware.map((item, index) => (
//               <li key={index} data-aos="fade-up" data-aos-delay={100 + index * 50}>
//                 <MdKeyboardDoubleArrowRight className={styles.listIcon} />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Section 4: Contact */}
//        {/* Section 4: Contact */}
// <div className={styles.footerSection}>
//   <h4 data-aos="fade-up" data-aos-delay="0">Our Location</h4>
//   <p data-aos="fade-up" data-aos-delay="100">
//     <FaMapMarkerAlt className={styles.contactIcon} />
//     Chandrika Vilasini, Mohana Block, Rajahmundry-533296
//   </p>
//   <p data-aos="fade-up" data-aos-delay="200">
//     <FaEnvelope className={styles.contactIcon} />
//     infotech@pengwin.com
//   </p>
//   <p data-aos="fade-up" data-aos-delay="300">
//     <FaPhone className={styles.contactIcon} />
//     +91 94933 23547
//   </p>
// </div>

//       </div>

//       <div className={styles.copyRight} data-aos="fade-up" data-aos-delay="0">
//         &copy; {new Date().getFullYear()} Pengwin Tech Solutions. All Rights Reserved.
//       </div>

//       <div className={styles.wave}></div>
//     </footer>
//   );
// }
//................
// above code is good



"use client";

import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../styles/layout/footer.module.scss";

export default function Footer() {
  const services = [
    "Fullstack Development",
    "Apps",
    "Web Application Development",
    "Support & Maintenance",
    "Industries",
  ];

  const middleware = [
    "IBM API Connect",
    "IBM DataPower",
    "IBM App Connect Enterprise (ACE)",
    "IBM Aspera",
    "IBM Cloud Pak for Integration (CP4I)",
    "IBM MQ",
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  return (
    <footer className={styles.footer}>
       <div className={styles.bgOverlay}></div> 
      <div className={styles.footerContainer}>
        {/* Section 1: Logo + highlight + social icons */}
        <div className={styles.footerSection} data-aos="fade-up">
          <div className={styles.logo}>
            <Image src="/SimplifiedPengwinLogo.png" alt="Pengwin Tech Solutions" width={200} height={40} />
          </div>

          <p className={styles.highlight}>
            Our skilled team at Pengwin Tech Solutions ensures complete client
            satisfaction by delivering high-quality solutions and providing 24/7
            support throughout every stage of your project.
          </p>

          <div className={styles.socialIcons}>
            <a href="https://wa.me/919493323547" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/company/pengwintech/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.instagram.com/pengwintech" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/people/Pengwin-Tech-Solutions/61574496058132/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>

        {/* Section 2: Services */}
        <div className={styles.footerSection}>
          <h4>Services</h4>
          <ul>
            {services.map((item, index) => (
              <li key={index}>
                <MdKeyboardDoubleArrowRight className={styles.listIcon} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3: Middleware */}
        <div className={styles.footerSection}>
          <h4>Middleware Integration</h4>
          <ul>
            {middleware.map((item, index) => (
              <li key={index}>
                <MdKeyboardDoubleArrowRight className={styles.listIcon} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Contact */}
        <div className={styles.footerSection}>
          <h4>Our Location</h4>
          <p><FaMapMarkerAlt className={styles.contactIcon} /> Chandrika Vilasini, Mohana Block, Rajahmundry-533296</p>
          <p><FaEnvelope className={styles.contactIcon} /> infotech@pengwin.com</p>
          <p><FaPhone className={styles.contactIcon} /> +91 94933 23547</p>
        </div>
      </div>

      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} Pengwin Tech Solutions. All Rights Reserved.
      </div>

      {/* SVG Wave */}
      <div className={styles.wave}></div>
    </footer>
  );
}
