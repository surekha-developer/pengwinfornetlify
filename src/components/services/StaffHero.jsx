"use client";

import Image from "next/image";
import styles from "../../styles/serviceStyles/DigitalHero.module.scss";
import { motion } from "framer-motion";

export default function StaffHero({
  heading = "Staff Augmentation",
  description = "At Pengwin Tech Solutions, we help businesses strengthen their teams with skilled professionals exactly when they’re needed. Our expert staff augmentation services provide flexible, reliable talent that enhances productivity, accelerates projects, and drives lasting success",
  imageSrc = "/digi2.jpg",
}) {
  return (
    <section className={styles.aboutHero}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Service Us"
        fill
        priority
        className={styles.bgImage}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Animated Content */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: -60 }}   // 🔥 from top
        animate={{ opacity: 1, y: 0 }}     // 🔥 to center
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
      >
        <h1>{heading}</h1>
        <p>{description}</p>
      </motion.div>
    </section>
  );
}
