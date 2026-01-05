

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import styles from "../../styles/layout/Header.module.scss";
// import { usePathname } from "next/navigation";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   // Close menu on route change
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [pathname]);

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Services", href: "/services" },
//     { name: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <header className={styles.header}>
//       {/* Logo */}
//       <div className={styles.logo}>
//         <Image
//           src="/SimplifiedPengwinLogo.png"
//           alt="Pengwin Tech Solutions"
//           width={220}
//           height={90}
//           priority
//         />
//       </div>

//       {/* Navigation */}
//       <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
//         {navLinks.map((link, idx) => (
//           <Link
//             key={idx}
//             href={link.href}
//             className={pathname === link.href ? styles.active : ""}
//           >
//             {link.name}
//             <span className={styles.underline}></span>
//           </Link>
//         ))}
//       </nav>

//       {/* Hamburger */}
//       <div
//         className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span />
//         <span />
//         <span />
//       </div>
//     </header>
//   );
// }
//................



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/layout/Header.module.scss";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/SimplifiedPengwinLogo.png"
          alt="Pengwin Tech Solutions"
          width={220}
          height={90}
          priority
        />
      </div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            href={link.href}
            className={pathname === link.href ? styles.active : ""}
          >
            {link.name}
            <span className={styles.underline}></span>
          </Link>
        ))}
      </nav>

      {/* Hamburger */}
      {/* <div
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </div> */}

      {/* Hamburger */}
{/* <div
  className={`${styles.menuBtn} ${menuOpen ? styles.open : ""}`}
  onClick={() => setMenuOpen(!menuOpen)}
>
  <span></span>
  <span></span>
</div> */}
{/* Menu Toggle Button */}
{/* <div
  className={styles.menuToggle}
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? (
    <span className={styles.backArrow}>←</span>
  ) : (
    <div className={styles.menuBtn}>
      <span></span>
      <span></span>
    </div>
  )}
</div> */}

{/* Menu Toggle */}

{/* Back Arrow (attached to sidebar) */}
{menuOpen && (
  <div
    className={styles.sidebarBackArrow}
    onClick={() => setMenuOpen(false)}
  >
    ←
  </div>
)}

{/* Hamburger */}
{!menuOpen && (
  <div
    className={styles.menuBtn}
    onClick={() => setMenuOpen(true)}
  >
    <span></span>
    <span></span>
  </div>
)}







    </header>
  );
}
