

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/homeStyles/OurClients.module.scss";

import headingImg from "../../../public/ourclientswebpimages/ourclientsheadingremovebg.webp"; 
import c1 from "../../../public/ourclientswebpimages/yogaland.webp";
import c3 from "../../../public/ourclientswebpimages/sliceflorbg.webp";
import c2 from "../../../public/ourclientswebpimages/Ramadeus.webp";
import c5 from "../../../public/ourclientswebpimages/magni5.webp";
import c7 from "../../../public/ourclientswebpimages/innovarsity.webp";
import c4 from "../../../public/ourclientswebpimages/Affidi.webp"; // SMALL LOGO
import c6 from "../../../public/ourclientswebpimages/bxc.webp";

export default function OurClients() {
  const clients = [c1, c2, c3, c4, c5, c6, c7];

  const itemsRef = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisible(prev => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach(el => el && observer.observe(el));

    return () => {
      itemsRef.current.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section id="clients" className={styles.clientsSection}>

      <div className={styles.headingWrapper}>
        <Image src={headingImg} alt="Our Clients" className={styles.headingImg} />
      </div>

      <div className={styles.grid}>
        {clients.map((img, idx) => (
          <div
            key={idx}
            data-index={idx}
            ref={el => (itemsRef.current[idx] = el)}
            className={`
              ${styles.clientBox}
              ${visible[idx] ? styles.visible : ""}
              ${idx === 6 ? styles.lastCenter : ""}
              ${idx === 5 ? styles.largeLogo : ""}
            `}
            style={{ transitionDelay: `${idx * 0.15}s` }}
          >
            <Image src={img} alt={`Client ${idx + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
}
