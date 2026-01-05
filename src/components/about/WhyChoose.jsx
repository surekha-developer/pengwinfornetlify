

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../../styles/aboutStyles/WhyChoose.module.scss";

const images = [
  "/why1Chooserbg.png",
  "/why2Chooserbg.png",
  // "/why3Chooserbg.png",
  // "/why4Chooserbg.png",
  // "/why5Chooserbg.png",
  // "/why6Chooserbg.png",
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const features = [
    "24/7 Support",
    "1 Year of innovative growth as a startup",
    "Agile, customer-focused, and scalable solutions",
    "Expertise across Front-End, Back-End, Cloud, and AI/ML",
    "Rapid adoption of any new technology for client success",
    "We started locally, but our solutions now serve global clients",
    "22+ Years of leadership experience in Sales & Business Strategy",
  ];

  return (
    <section className={styles.whyChoose}>
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h2 data-aos="fade-right">Why Choose Us</h2>
          <p data-aos="fade-right" data-aos-delay="100">
            We deliver reliable, scalable, and future-ready digital solutions
            tailored to your business needs.
          </p>

          <ul>
            {features.map((item, index) => (
              <li
                key={index}
                data-aos="fade-right"
                data-aos-delay={200 + index * 50} // increasing delay
              >
                ✔ {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.right}>
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt="Why Choose Us"
              fill
              className={`${styles.image} ${
                index === activeIndex ? styles.active : ""
              }`}
              priority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
