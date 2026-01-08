"use client";

import Image from "next/image";
import styles from "./SectionTwo.module.scss";
import sampleImg from "../../../public/commitmentQuality.jpg"; // replace image

export default function SectionTwo() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>

        {/* LEFT TEXT */}
        <div className={styles.textBox}>
          <h2>Smart Technology Solutions</h2>
          <p>
            Our team delivers innovative and secure digital solutions
            tailored to your business goals and growth strategy.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src={sampleImg}
            alt="Section Image"
            fill
            priority
          />
        </div>

      </div>
    </section>
  );
}
