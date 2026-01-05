

// "use client";

// import styles from "../../styles/aboutStyles/Dummy.module.scss";

// // "use client";

// import { useEffect, useRef, useState } from "react";
// // import styles from "@/styles/homeStyles/HeroSection.module.scss";

// export default function HeroSection() {
//   const [headerWhite, setHeaderWhite] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!heroRef.current) return;
//       const line = heroRef.current.querySelector(`.${styles.horizontalLine}`);
//       if (!line) return;

//       const lineTop = line.getBoundingClientRect().top;
//       if (lineTop <= 0) setHeaderWhite(true);
//       else setHeaderWhite(false);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section ref={heroRef} className={styles.heroSection}>
//        <div className={styles.overlay}></div>
//       {/* Header */}
//       <header className={`${styles.header} ${headerWhite ? styles.white : ""}`}>
//         <div className={styles.logo}>Pengwin Tech</div>
//         <nav className={styles.nav}>
//           <a href="#home">Home</a>
//           <a href="#about">About</a>
//           <a href="#services">Services</a>
//           <a href="#contact">Contact</a>
//         </nav>
//       </header>

//       {/* Hero Content */}
//       <div className={styles.heroContent}>
//         <h1 className={styles.heroTitle}>
//           A Trusted <br /> Transformation Partner
//         </h1>
//         <p className={styles.heroSub}>
//           We deliver secure, scalable, and innovative digital solutions for your business growth.
//         </p>
//         <button className={styles.heroBtn}>Explore Our Services</button>

//         {/* Horizontal line */}
//         <div className={styles.horizontalLine}></div>
//       </div>

//       {/* Bottom Cards */}
//       {/* <div className={styles.cardsWrapper}>
//         <div className={styles.card}>Phone</div>
//         <div className={styles.card}>Email</div>
//         <div className={styles.card}>Location</div>
//       </div> */}

//       {/* Bottom Cards */}
// <div className={styles.cardsWrapper}>
//   <div className={styles.card}>
//     <h3>Technology</h3>
//     <p>
//       Delivering scalable, secure and intelligent solutions that drive performance & growth with precision.
//     </p>
//   </div>

//   <div className={styles.card}>
//     <h3>Innovation</h3>
//     <p>
//       Delivering scalable, secure and intelligent solutions that drive performance & growth with precision.
//     </p>
//   </div>

//   <div className={styles.card}>
//     <h3>Strategy</h3>
//     <p>
//       Delivering scalable, secure and intelligent solutions that drive performance & growth with precision.
//     </p>
//   </div>
// </div>

//     </section>
//   );
// }
//...............



"use client";

import styles from "../../styles/aboutStyles/Dummy.module.scss";

// "use client";

import { useEffect, useRef, useState } from "react";
// import styles from "@/styles/homeStyles/HeroSection.module.scss";

export default function HeroSection() {
  const [headerWhite, setHeaderWhite] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const line = heroRef.current.querySelector(`.${styles.horizontalLine}`);
      if (!line) return;

      const lineTop = line.getBoundingClientRect().top;
      if (lineTop <= 0) setHeaderWhite(true);
      else setHeaderWhite(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className={styles.heroSection}>
       <div className={styles.overlay}></div>
      {/* Header */}
      <header className={`${styles.header} ${headerWhite ? styles.white : ""}`}>
        <div className={styles.logo}>Pengwin Tech</div>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          A Trusted <br /> Transformation Partner
        </h1>
        <p className={styles.heroSub}>
          We deliver secure, scalable, and innovative digital solutions for your business growth.
        </p>
        <button className={styles.heroBtn}>Explore Our Services</button>

        {/* Horizontal line */}
        <div className={styles.horizontalLine}></div>
      </div>

      {/* Bottom Cards */}
      {/* <div className={styles.cardsWrapper}>
        <div className={styles.card}>Phone</div>
        <div className={styles.card}>Email</div>
        <div className={styles.card}>Location</div>
      </div> */}

      {/* Bottom Cards */}
{/* <div className={styles.cardsWrapper}>
  <div className={styles.card}>
    <h3>Technology</h3>
    <p>
      Delivering scalable, secure and intelligent solutions that drive performance & growth with precision.
    </p>
  </div>

  <div className={styles.card}>
    <h3>Innovation</h3>
    <p>
      Delivering scalable, secure and intelligent solutions that drive performance & growth with precision.
    </p>
  </div>

  <div className={styles.card}>
    <h3>Strategy</h3>
    <p>
      Delivering scalable, secure and intelligent solutions that drive performance & growth with precision.
    </p>
  </div>
</div> */}

{/* Bottom Cards */}
<div className={styles.cardsWrapper}>
  <div className={`${styles.card} ${styles.smallCard}`}>
    <h3>Technology</h3>
    <p>
      Delivering scalable, secure and intelligent solutions that drive performance & growth with precision.
    </p>
  </div>

  <div className={`${styles.card} ${styles.mainCard}`}>
    <h3>Innovation</h3>
    <p>
      Delivering scalable, secure and intelligent solutions that drive performance & growth with precision.
    </p>
  </div>

  <div className={`${styles.card} ${styles.smallCard}`}>
    <h3>Strategy</h3>
    <p>
      Delivering scalable, secure and intelligent solutions that drive performance & growth with precision.
    </p>
  </div>
</div>



    </section>
  );
}
