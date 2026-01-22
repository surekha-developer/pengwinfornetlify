

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/aboutStyles/WhoWeAreNew.module.scss";
import Link from "next/link";

export default function WhoWeAreNew() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger typing
            observer.unobserve(entry.target); // Only once
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.whoSection}>
      {/* <div className={styles.overlay}></div> */}

      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.subtitle}>Who We Are</span>

          <h2 className={styles.title}>
            <span
              className={`${styles.typing} ${isVisible ? styles.startTyping : ""}`}
            >
              We Build Smart Digital Solutions for Growing Businesses
            </span>
          </h2>

          <p className={styles.description}>
            PengWIN is a passionate, technology-driven software development company with
            1+ year of experience, founded with the purpose of creating practical,
            scalable, and impactful digital solutions. From web applications to
            enterprise systems, we focus on quality, transparency, and long-term client
            success, helping businesses grow and thrive in a rapidly evolving digital
            world.
          </p>

          {/* <Link href="/about" className={styles.btn}>
            Learn More
          </Link> */}
        </div>
      </div>
    </section>
  );
}
