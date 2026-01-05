

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import styles from "@/styles/homeStyles/Empowering.module.scss";

// export default function EmpoweringSection() {
//   const headingText = "Emmpowering Your Digital Transformation";
//   const [typedText, setTypedText] = useState("");
//   const [showParagraphs, setShowParagraphs] = useState(false);

//  useEffect(() => {
//   let index = 0;

//   const interval = setInterval(() => {
//     if (index < headingText.length) {
//       setTypedText((prev) => prev + headingText.charAt(index));
//       index++;
//     } else {
//       clearInterval(interval);
//       setTimeout(() => setShowParagraphs(true), 300);
//     }
//   }, 60);

//   return () => clearInterval(interval);
// }, []);


//   return (
//     <section className={styles.empoweringSection}>
//       {/* Background Image */}
//       <Image
//         src="/empowerbg.jpg"
//         alt="Empowering Digital Transformation"
//         fill
//         priority
//         className={styles.bgImage}
//       />

//       {/* Overlay */}
//       <div className={styles.overlay}></div>

//       {/* Content */}
//       <div className={styles.content}>
//         <h2 className={styles.typewriter}>Empowering Your Digital Transformation</h2>

//         <p className={`${styles.paragraph} ${showParagraphs ? styles.show : ""}`}>
          // Pengwin Tech Solutions is a forward-thinking software development company
          // delivering secure, scalable, and intelligent digital solutions. We help
          // businesses turn ideas into high-impact websites, powerful mobile
          // applications, feature-rich e-commerce platforms, and enterprise-grade
          // systems.
//         </p>

//         <p
//           className={`${styles.paragraph} ${showParagraphs ? styles.showDelay : ""}`}
//         >
          // Driven by innovation and backed by deep technical expertise, we design
          // solutions that enhance user experience, streamline operations, and
          // accelerate business growth. From strategy and design to development and
          // deployment, we partner with you at every stage to ensure lasting digital
          // success.
//         </p>
//       </div>
//     </section>
//   );
// }
//...........
// above code is good


"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/homeStyles/Empowering.module.scss";

export default function EmpoweringSection() {
  const headingText = "Empowering Your Digital Transformation";
  const [typedText, setTypedText] = useState("");
  const [showParagraphs, setShowParagraphs] = useState(false);
  const sectionRef = useRef(null);
  const hasTypedRef = useRef(false); // use ref to persist across renders

  useEffect(() => {
    if (!sectionRef.current) return;

    let intervalId;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTypedRef.current) {
            hasTypedRef.current = true; // mark as typed

            const words = headingText.split(" ");
            let index = 0;

            intervalId = setInterval(() => {
              if (index < words.length) {
                const nextWord = words[index];
                setTypedText((prev) => (prev ? `${prev} ${nextWord}` : nextWord));
                index++;
              } else {
                clearInterval(intervalId);
                setTimeout(() => setShowParagraphs(true), 400);
              }
            }, 300);
          }
        });
      },
      { root: null, threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.empoweringSection}>
      <Image
        src="/empower2.jpg"
        alt="Empowering Digital Transformation"
        fill
        priority
        className={styles.bgImage}
      />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h2 className={styles.typewriter}>
          {typedText}
          <span className={styles.caret}>|</span>
        </h2>

        <p className={`${styles.paragraph} ${showParagraphs ? styles.show : ""}`}>
             Pengwin Tech Solutions is a forward-thinking software development company
          delivering secure, scalable, and intelligent digital solutions. We help
          businesses turn ideas into high-impact websites, powerful mobile
          applications, feature-rich e-commerce platforms, and enterprise-grade
          systems.
        </p>

        <p
          className={`${styles.paragraph} ${
            showParagraphs ? styles.showDelay : ""
          }`}
        >
         Driven by innovation and backed by deep technical expertise, we design
          solutions that enhance user experience, streamline operations, and
          accelerate business growth. From strategy and design to development and
          deployment, we partner with you at every stage to ensure lasting digital
          success.
        </p>
      </div>
    </section>
  );
}
