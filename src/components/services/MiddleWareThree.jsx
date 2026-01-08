import styles from "../../styles/serviceStyles/Digithree.module.scss";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function MiddleWareThree() {
  return (
    <>
     <section>
          <SectionHeader
            heading="MiddleWare Integrations"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          {/* Your content goes here */}
        </section>
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
        Seamless Integration for Connected Operations
        </h1>

        <p>
         We help organizations connect their software systems efficiently and reliably. Our middleware solutions streamline workflows, enhance collaboration, and improve operational efficiency. By leveraging modern technologies and best practices, we ensure data flows seamlessly across platforms. Each integration is tailored to align with your existing systems and business objectives. We focus on delivering secure, scalable, and dependable solutions. Our goal is to empower your organization to operate smoothly and confidently.
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
