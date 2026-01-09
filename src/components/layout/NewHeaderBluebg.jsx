

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { GoMail } from "react-icons/go";
// import { IoIosMail } from "react-icons/io";



import styles from "../../styles/layout/NewHeaderBluebg.module.scss"; // Header styles

export default function NewHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = {
    whatsapp: "https://wa.me/919493323547",
    linkedin: "https://www.linkedin.com/company/pengwintech/",
    instagram: "https://www.instagram.com/pengwintech",
    facebook: "https://www.facebook.com/people/Pengwin-Tech-Solutions/61574496058132/",
    twitter: "https://twitter.com/",
  };

  return (
    <header className={styles.header}>
      <div className="appContainer">
        <div className={styles.headerInner}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/nobgwhitemainlogo.png" alt="Logo" width={200} height={45} />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        {navLinks.map((link, idx) =>
          link.name === "Services" ? (
            <div
              key={idx}
              className={styles.dropdown}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={styles.dropdownToggle}>
                Services{" "}
                {servicesOpen ? <MdOutlineArrowDropUp size={20} /> : <MdOutlineArrowDropDown size={20} />}
              </button>
             
<div className={`${styles.dropdownMenu} ${servicesOpen ? styles.show : ""}`}>
  <Link href="/services" className={styles.dropdownItem}>
    <span>View All Services</span>
    <GoArrowUpRight />
  </Link>
 

  <Link href="/services/middleware-integrations" className={styles.dropdownItem}>
    <span>Middleware Integrations</span>
    <GoArrowUpRight />
  </Link>
   <Link href="/services/digital-transformation" className={styles.dropdownItem}>
    <span>Digital Transformation</span>
    <GoArrowUpRight />
  </Link>

  <Link href="/services/software-consulting" className={styles.dropdownItem}>
    <span>Software Consulting</span>
    <GoArrowUpRight />
  </Link>

  <Link href="/services/cloud-services" className={styles.dropdownItem}>
    <span>Cloud Services</span>
    <GoArrowUpRight />
  </Link>

  <Link href="/services/staff-augmentation" className={styles.dropdownItem}>
    <span>Staff Augmentation</span>
    <GoArrowUpRight />
  </Link>

  <Link href="/services/iot-solutions" className={styles.dropdownItem}>
    <span>IoT Solutions</span>
    <GoArrowUpRight />
  </Link>

  <Link href="/services/no-code-low-code" className={styles.dropdownItem}>
    <span>No Code / Low Code</span>
    <GoArrowUpRight />
  </Link>

 
</div>


            </div>
          ) : (
            <Link
              key={idx}
              href={link.href}
              className={pathname === link.href ? styles.active : ""}
            >
              {link.name}
            </Link>
          )
        )}
      </nav>

      {/* Social Icons */}
      <div className={styles.socials}>
        {/* <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a> */}
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:info@pengwintech.com">
    <GoMail />
  </a>
       
      </div>

      {/* Hamburger Menu */}
   

{/* Only visible on tablet & mobile */}
<button
  className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span className={styles.line}></span>
  <span className={styles.line}></span>
  <span className={styles.line}></span>
</button>




      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link, idx) =>
            link.name === "Services" ? (
              <div key={idx} className={styles.mobileDropdown}>
                

<button
  className={styles.dropdownToggle}
  onClick={() => setServicesOpen(!servicesOpen)}
>
  Services{" "}
  {servicesOpen ? <MdOutlineArrowDropUp size={20} /> : <MdOutlineArrowDropDown size={20} />}
</button>

{servicesOpen && (
  <div className={styles.dropdownMenu}>
    <Link href="/services">View All Services</Link>
    <Link href="/services/digital-transformation">Digital Transformation</Link>
    <Link href="/services/middleware-integrations">Middleware Integrations</Link>
    <Link href="/services/software-consulting">Software Consulting</Link>
    <Link href="/services/cloud-services">Cloud Services</Link>
    <Link href="/services/staff-augmentation">Staff Augmentation</Link>
    <Link href="/services/iot-solutions">IoT Solutions</Link>
    <Link href="/services/no-code-low-code">No Code / Low Code</Link>
  </div>
)}


              </div>
            ) : (
              <Link
                key={idx}
                href={link.href}
                className={pathname === link.href ? styles.active : ""}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}

         
          <div className={styles.mobileSocials}>
            <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>
      )} */}

{menuOpen && (
  <div className={styles.mobileMenu}>
    {navLinks.map((link, idx) =>
      link.name === "Services" ? (
        <div key={idx} className={styles.mobileDropdown}>
          {/* Services button */}
          <button
            className={styles.dropdownToggle}
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services{" "}
            {servicesOpen ? <MdOutlineArrowDropUp size={20} /> : <MdOutlineArrowDropDown size={20} />}
          </button>

          {/* Mobile dropdown links */}
          {servicesOpen && (
            <div className={styles.dropdownMenu}>
              <Link href="/services" className={styles.dropdownItem}>
                <span>View All Services</span>
                <GoArrowUpRight />
              </Link>
                <Link href="/services/digital-transformation" className={styles.dropdownItem}>
                <span>Digital Transformation</span>
                <GoArrowUpRight />
              </Link>
            
              <Link href="/services/middleware-integrations" className={styles.dropdownItem}>
                <span>Middleware Integrations</span>
                <GoArrowUpRight />
              </Link>
              
              <Link href="/services/software-consulting" className={styles.dropdownItem}>
                <span>Software Consulting</span>
                <GoArrowUpRight />
              </Link>
              <Link href="/services/cloud-services" className={styles.dropdownItem}>
                <span>Cloud Services</span>
                <GoArrowUpRight />
              </Link>
              <Link href="/services/staff-augmentation" className={styles.dropdownItem}>
                <span>Staff Augmentation</span>
                <GoArrowUpRight />
              </Link>
              <Link href="/services/iot-solutions" className={styles.dropdownItem}>
                <span>IoT Solutions</span>
                <GoArrowUpRight />
              </Link>
              <Link href="/services/no-code-low-code" className={styles.dropdownItem}>
                <span>No Code / Low Code</span>
                <GoArrowUpRight />
              </Link>
            </div>
          )}
        </div>
      ) : (
        <Link
          key={idx}
          href={link.href}
          className={pathname === link.href ? styles.active : ""}
          onClick={() => setMenuOpen(false)} // close menu on link click
        >
          {link.name}
        </Link>
      )
    )}

    {/* Mobile Social Icons */}
    <div className={styles.mobileSocials}>
      {/* <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a> */}
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>

        <a href="mailto:info@pengwintech.com">
    <GoMail />
  </a>
  
    </div>
  </div>
)}

</div>
</div>
    </header>
  );
}
//......................


