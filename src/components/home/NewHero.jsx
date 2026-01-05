

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/homeStyles/NewHero.module.scss";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function NewHeroSection() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  /* ======================= Top Bar Typing Animation ======================= */
  const fullText = "info@pengwintech.com | +91 98765 43210";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typingSpeed = 80;
    const holdTime = 8000;
    const restartDelay = 2000;
    let mounted = true;

    const typeLoop = async () => {
      while (mounted) {
        for (let i = 0; i <= fullText.length; i++) {
          setTypedText(fullText.slice(0, i));
          await new Promise((r) => setTimeout(r, typingSpeed));
        }
        await new Promise((r) => setTimeout(r, holdTime));
        setTypedText("");
        await new Promise((r) => setTimeout(r, restartDelay));
      }
    };

    typeLoop();
    return () => (mounted = false);
  }, []);

  /* ======================= Heading Typing Animation ======================= */
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
        src="/lightcolorbg.jpg"
        alt="AI Technology"
        fill
        priority
        className={styles.bg}
      />
      <div className={styles.overlay}></div>

      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topInfo}>
          <span>{typedText}</span>
          <span className={styles.cursor}>|</span>
        </div>
      </div>

      {/* Header Navigation */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/nobgbluemainlogo.png" alt="Logo" width={200} height={45} />
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={pathname === link.href ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className={styles.socials}>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        {/* Hamburger for mobile */}
        <button
          className={`${styles.menuBtn} ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={pathname === link.href ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
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

   {/* //floating cards */}

      <div className={styles.cardsWrapper}>
  <div className={styles.cards}>
    <div
      className={styles.card}
      style={{ backgroundImage: "url('/modern-apps.jpg')" }}
      onClick={() => window.location.href = "/services/digital-transformation"}
    >
      <h3>Digital Transformation</h3>
      <p>
        Empowering businesses to evolve in the digital era by leveraging cutting-edge technologies. We streamline processes, improve operational efficiency, and enable data-driven decision-making for sustainable growth.
      </p>
    </div>

    <div
      className={styles.card}
      style={{ backgroundImage: "url('/modern-apps.jpg')" }}
      onClick={() => window.location.href = "/services/modern-apps"}
    >
      <h3>Modern Apps</h3>
      <p>
        Designing and developing scalable, intuitive, and secure applications for web and mobile. Our solutions focus on seamless user experiences, fast performance, and adaptability to meet the dynamic demands of today’s market.
      </p>
    </div>

    <div
      className={styles.card}
      style={{ backgroundImage: "url('/product-engineering.jpg')" }}
      onClick={() => window.location.href = "/services/product-engineering"}
    >
      <h3>Product Engineering</h3>
      <p>
        Turning ideas into market-ready products through end-to-end engineering. From concept and prototyping to development, testing, and deployment, we ensure high-quality, innovative, and reliable products that delight users.
      </p>
    </div>
  </div>
</div>

    </section>
  );
}
