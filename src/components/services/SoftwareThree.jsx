import styles from "../../styles/serviceStyles/Digithree.module.scss";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function SoftwareThree() {
  return (
    <>
     <section>
          <SectionHeader
            heading="Software Consulting"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          {/* Your content goes here */}
        </section>
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
         Strategic IT Guidance for Smarter Decisions
        </h1>

        <p>
          We partner with organizations to assess and optimize their IT strategies for sustainable growth. Our consulting solutions provide actionable insights that improve operational efficiency and guide technology investments. By analyzing existing systems and processes, we help businesses make informed decisions and align IT with business objectives. Each recommendation is tailored to your unique needs, ensuring clarity, security, and long-term value. Our approach empowers organizations to adopt technology confidently and achieve measurable results.
        </p>
      </div>

       <div className={styles.cubeWrapper}>
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
      </div>
    </section>
    </>
  );
}
