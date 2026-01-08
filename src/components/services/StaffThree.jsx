import styles from "../../styles/serviceStyles/Digithree.module.scss";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function StaffThree() {
  return (
    <>
     <section>
          <SectionHeader
            heading="Staff Augmentation"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          {/* Your content goes here */}
        </section>
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Flexible Talent to Accelerate Your Success
        </h1>

        <p>
          We partner with organizations to provide skilled professionals who seamlessly integrate with existing teams. Our approach ensures the right expertise is available when and where it’s needed, enabling faster project delivery and enhanced productivity. By carefully matching talent to business requirements, we maintain high standards of quality and performance. Each engagement is flexible, scalable, and tailored to support your unique goals. Our staff augmentation solutions help organizations adapt quickly, reduce resource gaps, and achieve measurable results with confidence.
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
