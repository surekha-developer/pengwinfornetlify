

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import styles from "../../styles/layout/Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/nobgbluemainlogo.png"
          alt="Pengwin Tech Solutions"
          width={200}
          height={45}
          priority
        />
      </div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" className={pathname === "/" ? styles.active : ""}>
          Home
          <span className={styles.underline}></span>
        </Link>

        <Link href="/about" className={pathname === "/about" ? styles.active : ""}>
          About Us
          <span className={styles.underline}></span>
        </Link>

        {/* Services Dropdown */}
        <div
          className={styles.dropdown}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button
            className={styles.dropdownToggle}
          >
            Services{" "}
            {servicesOpen ? (
              <MdOutlineArrowDropUp size={20} />
            ) : (
              <MdOutlineArrowDropDown size={20} />
            )}
          </button>

          {/* Render dropdown */}
          {servicesOpen && (
            <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.show : ""}`}>
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

        <Link href="/contact" className={pathname === "/contact" ? styles.active : ""}>
          Contact Us
          <span className={styles.underline}></span>
        </Link>
      </nav>

      {/* Sidebar Back Arrow */}
      {menuOpen && (
        <div className={styles.sidebarBackArrow} onClick={() => setMenuOpen(false)}>
          ←
        </div>
      )}

      {/* Hamburger */}
      {!menuOpen && (
        <div className={styles.menuBtn} onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
        </div>
      )}
    </header>
  );
}
