

"use client";

import Image from "next/image";
import styles from "@/styles/aboutStyles/AboutHeroNew.module.scss";
import { motion } from "framer-motion";

export default function AboutHeroNew({
  heading = "About Us",
  description = "Welcome to Pengwin Tech Solutions. We create smart digital solutions that help businesses grow. Our expert team delivers reliable, customized services to make your success simple and lasting.",
  imageSrc = "/aerial-view-business-team.jpg",
}) {
  return (
    <section className={styles.aboutHero}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="About Us"
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
