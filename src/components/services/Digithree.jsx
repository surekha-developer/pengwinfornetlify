import styles from "../../styles/serviceStyles/Digithree.module.scss";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function DigiThree() {
  return (
    <> 
    <section>
          <SectionHeader
            heading="Digital Tranformation"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          {/* Your content goes here */}
        </section>
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Our Approach
          to Delivering Digital Value
        </h1>

        <p>
          We partner with organizations to thoughtfully design and implement digital solutions that support sustainable growth. Our focus is on building reliable, scalable systems that strengthen operations and enhance user experiences. By combining industry best practices with modern technologies, we help businesses adapt confidently to change. Every solution is tailored to align with long-term objectives, ensuring clarity, security, and measurable value. Our commitment is to deliver technology that works seamlessly today while supporting future innovation and progress.
        </p>
      </div>

      <div className={styles.cube}>
  <div className={`${styles.face} ${styles.front}`}>
    <Image src="/Nocodeimg.jpg" alt="Front" fill />
  </div>
  <div className={`${styles.face} ${styles.back}`}>
    <Image src="/digi2.jpg" alt="Back" fill />
  </div>
  <div className={`${styles.face} ${styles.left}`}>
    <Image src="/digi.jpg" alt="Left" fill />
  </div>
  <div className={`${styles.face} ${styles.right}`}>
    <Image src="/cloudimg.jpg" alt="Right" fill />
  </div>
  <div className={`${styles.face} ${styles.top}`}>
    <Image src="/digit3.jpg" alt="Top" fill />
  </div>
  <div className={`${styles.face} ${styles.bottom}`}>
    <Image src="/staffimg.jpg" alt="Bottom" fill />
  </div>
</div>
    </section>
    </>
  );
}
