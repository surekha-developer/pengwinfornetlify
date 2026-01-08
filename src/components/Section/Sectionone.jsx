"use client";

import Image from "next/image";
import styles from "./Sectionone.module.scss";
import sampleImg from "../../../public/idea.jpeg"; // replace with your image
import SectionHeader from "../SectionHeader/SectionHeader";

export default function Sectionone() {
  return (

    <>
    <section>
          <SectionHeader
            heading="About Us"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          {/* Your content goes here */}
        </section>
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* LEFT IMAGE */}
        <div className={styles.imageBox}>
         <Image
  src={sampleImg}
  alt="Section Image"
  fill
  priority
/>
        </div>

        {/* RIGHT TEXT */}
        <div className={styles.textBox}>
          <h2>Powerful Digital Solutions</h2>
          <p>
            We build scalable, performance-driven digital experiences
            that help businesses grow and stand out in the market.
          </p>
        </div>

      </div>
    </section>
    </>
  );
}
