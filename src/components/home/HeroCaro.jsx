

"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import styles from "@/styles/homeStyles/HeroCaro.module.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "Fullstack Development",
    desc: "Building scalable web & mobile applications using latest technologies.",
    bg: "/homecaro3.jpg",
  },
  {
    title: "Apps",
    desc: "Native and cross-platform mobile apps for iOS & Android.",
    bg: "/homecaro7.jpg",
  },
  {
    title: "Web Application Development",
    desc: "Modern web apps for business processes & user engagement.",
    bg: "/homecaro2.jpg",
  },
  {
    title: "Support & Maintenance",
    desc: "24/7 maintenance, updates, and technical support.",
    bg: "/homecaro6.jpg",
  },
];

export default function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <section className={styles.heroCarousel}>
      <Slider {...settings}>
        {services.map((service, idx) => (
          <Slide
            key={idx}
            service={service}
            isActive={idx === activeSlide}
          />
        ))}
      </Slider>
    </section>
  );
}

// Slide Component
function Slide({ service, isActive }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!isActive) return; // Only animate if slide is active

    setDisplayedText(""); // Reset text on slide change
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(service.title.slice(0, i + 1));
      i++;
      if (i === service.title.length) clearInterval(interval);
    }, 100); // Typing speed (ms per letter)

    return () => clearInterval(interval);
  }, [isActive, service.title]);

  return (
    <div className={styles.slide}>
      <Image
        src={service.bg}
        alt={service.title}
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2>{displayedText}</h2>
        <p>{service.desc}</p>
      </div>
    </div>
  );
}
