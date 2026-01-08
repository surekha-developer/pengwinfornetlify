


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import styles from "../../styles/homeStyles/NewHero.module.scss";
// import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

// export default function NewHeroSection() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Contact", href: "/contact" },
//   ];

//   /* ======================= Top Bar Typing Animation ======================= */
//   // const fullText = "info@pengwintech.com | +91 98765 43210";
//   // const [typedText, setTypedText] = useState("");

//   // useEffect(() => {
//   //   const typingSpeed = 80;
//   //   const holdTime = 8000;
//   //   const restartDelay = 2000;
//   //   let mounted = true;

//   //   const typeLoop = async () => {
//   //     while (mounted) {
//   //       for (let i = 0; i <= fullText.length; i++) {
//   //         setTypedText(fullText.slice(0, i));
//   //         await new Promise((r) => setTimeout(r, typingSpeed));
//   //       }
//   //       await new Promise((r) => setTimeout(r, holdTime));
//   //       setTypedText("");
//   //       await new Promise((r) => setTimeout(r, restartDelay));
//   //     }
//   //   };

//   //   typeLoop();
//   //   return () => (mounted = false);
//   // }, []);

//   /* ======================= Heading Typing Animation ======================= */
//   const headingText = "A Trusted\nPartner in Innovation";
//   const [typedHeading, setTypedHeading] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const typeHeading = () => {
//       if (i <= headingText.length) {
//         setTypedHeading(headingText.slice(0, i).replace(/\n/g, "<br/>"));
//         i++;
//         setTimeout(typeHeading, 100);
//       }
//     };
//     typeHeading();
//   }, []);

//   return (
//     <section className={styles.hero}>
//       {/* Background */}
//       <Image
//         src="/lightcolorbg.jpg"
//         alt="AI Technology"
//         fill
//         priority
//         className={styles.bg}
//       />
//       <div className={styles.overlay}></div>

//       {/* Top Bar */}
//       {/* <div className={styles.topBar}>
//         <div className={styles.topInfo}>
//           <span>{typedText}</span>
//           <span className={styles.cursor}>|</span>
//         </div>
//       </div> */}

//       {/* Header Navigation */}
//       <header className={styles.header}>
//         <div className={styles.logo}>
//           <Image src="/nobgbluemainlogo.png" alt="Logo" width={200} height={45} />
//         </div>

//         <nav className={styles.nav}>
//           <Link href="/" className={pathname === "/" ? styles.active : ""}>
//             Home
//           </Link>
//           <Link href="/about" className={pathname === "/about" ? styles.active : ""}>
//             About Us
//           </Link>

//           {/* Services Dropdown */}
//           <div
//             className={styles.dropdown}
//             onMouseEnter={() => setServicesOpen(true)}
//             onMouseLeave={() => setServicesOpen(false)}
//           >
//             <button className={styles.dropdownToggle}>
//               Services{" "}
//               {servicesOpen ? (
//                 <MdOutlineArrowDropUp size={20} />
//               ) : (
//                 <MdOutlineArrowDropDown size={20} />
//               )}
//             </button>

//             <div
//               className={`${styles.dropdownMenu} ${
//                 servicesOpen ? styles.show : ""
//               }`}
//             >
//                <Link href="/services">View All Services</Link>
//               <Link href="/services/digital-transformation">
//                 Digital Transformation
//               </Link>
//               <Link href="/services/middleware-integrations">
//                 Middleware Integrations
//               </Link>
//               <Link href="/services/software-consulting">
//                 Software Consulting
//               </Link>
//               <Link href="/services/cloud-services">Cloud Services</Link>
//               <Link href="/services/staff-augmentation">Staff Augmentation</Link>
//               <Link href="/services/iot-solutions">IoT Solutions</Link>
//               <Link href="/services/no-code-low-code">No Code / Low Code</Link>
//             </div>
//           </div>

//           <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>
//             Contact
//           </Link>
//         </nav>

//         {/* Social Icons */}
//         <div className={styles.socials}>
//           <a href="#"><FaLinkedin /></a>
//           <a href="#"><FaInstagram /></a>
//           <a href="#"><FaFacebook /></a>
//           <a href="#"><FaTwitter /></a>
//         </div>

//         {/* Hamburger for mobile */}
//         <button
//           className={`${styles.menuBtn} ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </header>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className={styles.mobileMenu}>
//           {navLinks.map((link, idx) =>
//             link.name === "Services" ? (
//               <div key={idx} className={styles.mobileDropdown}>
//                 <button
//                   className={styles.dropdownToggle}
//                   onClick={() => setServicesOpen(!servicesOpen)}
//                 >
//                   Services{" "}
//                   {servicesOpen ? (
//                     <MdOutlineArrowDropUp size={20} />
//                   ) : (
//                     <MdOutlineArrowDropDown size={20} />
//                   )}
//                 </button>
//                 {servicesOpen && (
//                   <div className={styles.dropdownMenu}>
//                      {/* <Link href="/services">View All Services</Link> */}
//                       <Link href="/services">View All Services</Link>
//                     <Link href="/services/digital-transformation">
//                       Digital Transformation
//                     </Link>
//                     <Link href="/services/middleware-integrations">
//                       Middleware Integrations
//                     </Link>
//                     <Link href="/services/software-consulting">
//                       Software Consulting
//                     </Link>
//                     <Link href="/services/cloud-services">Cloud Services</Link>
//                     <Link href="/services/staff-augmentation">Staff Augmentation</Link>
//                     <Link href="/services/iot-solutions">IoT Solutions</Link>
//                     <Link href="/services/no-code-low-code">No Code / Low Code</Link>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <Link
//                 key={idx}
//                 href={link.href}
//                 className={pathname === link.href ? styles.active : ""}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             )
//           )}
//         </div>
//       )}

//       <div className={styles.divider}></div>

//       {/* Hero Content */}
//       <div className={styles.content}>
//         <h1
//           className={styles.heading}
//           dangerouslySetInnerHTML={{ __html: typedHeading }}
//         ></h1>
//         <p>
//           Turning ideas into impactful digital solutions for a smarter future.
//         </p>
//         <Link href="/services" className={styles.secondaryBtn}>
//           Explore Our Services
//         </Link>
//       </div>

//       {/* Floating Cards */}
//       <div className={styles.cardsWrapper}>
//         <div className={styles.cards}>
//           <div
//             className={styles.card}
//             style={{ backgroundImage: "url('/modern-apps.jpg')" }}
//             onClick={() =>
//               window.location.href = "/services/digital-transformation"
//             }
//           >
//             <h3>Digital Transformation</h3>
//             <p>
//               Empowering businesses to evolve in the digital era by leveraging
//               cutting-edge technologies. We streamline processes, improve
//               operational efficiency, and enable data-driven decision-making for
//               sustainable growth.
//             </p>
//           </div>

//           <div
//             className={styles.card}
//             style={{ backgroundImage: "url('/modern-apps.jpg')" }}
//             onClick={() => window.location.href = "/services/modern-apps"}
//           >
//             <h3>Modern Apps</h3>
//             <p>
//               Designing and developing scalable, intuitive, and secure
//               applications for web and mobile. Our solutions focus on seamless
//               user experiences, fast performance, and adaptability to meet the
//               dynamic demands of today’s market.
//             </p>
//           </div>

//           <div
//             className={styles.card}
//             style={{ backgroundImage: "url('/product-engineering.jpg')" }}
//             onClick={() => window.location.href = "/services/product-engineering"}
//           >
//             <h3>Product Engineering</h3>
//             <p>
//               Turning ideas into market-ready products through end-to-end
//               engineering. From concept and prototyping to development,
//               testing, and deployment, we ensure high-quality, innovative, and
//               reliable products that delight users.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// //......................

"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/homeStyles/NewHero.module.scss";
import { useState, useEffect } from "react";

export default function NewHeroSection() {
  const headingText = "A Trusted\nPartner in Innovation";
  const [typedHeading, setTypedHeading] = useState("");

  useEffect(() => {
    let i = 0;
    const typeHeading = () => {
      if (i <= headingText.length) {
        setTypedHeading(headingText.slice(0, i).replace(/\n/g, "<br/>"));
        i++;
        setTimeout(typeHeading, 100);
      }
    };
    typeHeading();
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background */}
      <Image
        src="/AiHomeImg.jpg"
        alt="AI Technology"
        fill
        priority
        className={styles.bg}
      />
      <div className={styles.overlay}></div>

      <div className={styles.divider}></div>

      {/* Hero Content */}
      <div className={styles.content}>
        <h1
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html: typedHeading }}
        ></h1>
        <p>
          Turning ideas into impactful digital solutions for a smarter future.
        </p>
        <Link href="/services" className={styles.secondaryBtn}>
          Explore Our Services
        </Link>
      </div>

      {/* Floating Cards */}
      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          <div
            className={styles.card}
            style={{ backgroundImage: "url('/modern-apps.jpg')" }}
            onClick={() =>
              window.location.href = "/services/digital-transformation"
            }
          >
            <h3>Digital Transformation</h3>
            <p>
              Empowering businesses to evolve in the digital era by leveraging
              cutting-edge technologies. We streamline processes, improve
              operational efficiency, and enable data-driven decision-making for
              sustainable growth.
            </p>
          </div>

          <div
            className={styles.card}
            style={{ backgroundImage: "url('/modern-apps.jpg')" }}
            onClick={() => window.location.href = "/services/modern-apps"}
          >
            <h3>Modern Apps</h3>
            <p>
              Designing and developing scalable, intuitive, and secure
              applications for web and mobile. Our solutions focus on seamless
              user experiences, fast performance, and adaptability to meet the
              dynamic demands of today’s market.
            </p>
          </div>

          <div
            className={styles.card}
            style={{ backgroundImage: "url('/product-engineering.jpg')" }}
            onClick={() => window.location.href = "/services/product-engineering"}
          >
            <h3>Product Engineering</h3>
            <p>
              Turning ideas into market-ready products through end-to-end
              engineering. From concept and prototyping to development,
              testing, and deployment, we ensure high-quality, innovative, and
              reliable products that delight users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
