"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/aboutStyles/OurStoryExcellence.module.scss";

export default function OurStoryExcellence() {
  const sectionRef = useRef(null);
  const [visibleRows, setVisibleRows] = useState([]);

  useEffect(() => {
    const rows = sectionRef.current.querySelectorAll(`.${styles.row}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleRows((prev) => [...prev, entry.target.dataset.row]);
          }
        });
      },
      { threshold: 0.3 }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      {/* ROW 1 */}
      <div
        className={`${styles.row} ${
          visibleRows.includes("1") ? styles.visible : ""
        }`}
        data-row="1"
      >
        <div className={styles.image}>
          <Image
            src="/Story.jpg"
            alt="Our Story"
            width={200}
            height={200}
          />
        </div>

        <div className={styles.text}>
          <h2>Our Story</h2>
          <p>
            We started with a simple vision — to build meaningful digital
            solutions that empower businesses. With innovation, agility, and
            customer-first thinking, we transformed ideas into impactful
            products.
          </p>
        </div>
      </div>

      {/* ROW 2 */}
      <div
        className={`${styles.row} ${styles.reverse} ${
          visibleRows.includes("2") ? styles.visible : ""
        }`}
        data-row="2"
      >
        <div className={styles.text}>
          <h2>Excellence</h2>
          <p>
            Excellence is at the core of everything we do. From clean code to
            scalable architecture, we ensure quality, performance, and long-term
            success for every solution we deliver.
          </p>
        </div>

        <div className={styles.image}>
          <Image
            src="/Excellance.jpg"
            alt="Excellence"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
}
