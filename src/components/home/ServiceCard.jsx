

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
// import { FaCheckCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si"
import styles from "../../styles/homeStyles/ServicesList.module.scss";

export default function ServiceCard({ service, reverse }) {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [visiblePoints, setVisiblePoints] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);

            // stagger bullet points
            if (Array.isArray(service.description)) {
              service.description.forEach((_, i) => {
                setTimeout(() => {
                  setVisiblePoints((prev) => [...prev, i]);
                }, i * 200); // 200ms delay
              });
            }
          }
        });
      },
      { threshold: 0.3 } // 30% visible triggers animation
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [service.description]);

  return (
    <div
      ref={cardRef}
      className={`${styles.serviceRow} ${reverse ? styles.reverse : ""}`}
    >
      {/* Image */}
      <div
        className={`${styles.imageBox} ${
          reverse ? styles.fadeRight : styles.fadeLeft
        } ${inView ? styles.visible : ""}`}
      >
        <Image
          src={service.image}
          alt={service.title}
          width={500}
          height={350}
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={`${styles.content} ${inView ? styles.fadeUp : ""}`}>
        <h2>{service.title}</h2>
        {Array.isArray(service.description) ? (
          <ul className={styles.iconList}>
            {service.description.map((point, idx) => (
              <li
                key={idx}
                className={visiblePoints.includes(idx) ? styles.fadeUp : ""}
              >
                <SiTicktick className={styles.icon} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={inView ? styles.fadeUp : ""}>{service.description}</p>
        )}
      </div>
    </div>
  );
}
