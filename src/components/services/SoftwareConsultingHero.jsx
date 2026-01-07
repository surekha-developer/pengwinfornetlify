"use client";

import Image from "next/image";
import styles from "../../styles/serviceStyles/SoftwareConsultingHero.module.scss";
import { motion } from "framer-motion";

export default function SoftwareConsultingHero({
  heading = "Software Consulting",
  description = "At Pengwin Tech Solutions, we help businesses evaluate and optimize their IT strategies to achieve growth. Our expert team delivers insightful, customized consulting solutions that improve efficiency, guide technology decisions, and drive lasting success",
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
