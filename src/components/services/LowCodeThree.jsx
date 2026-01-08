import styles from "../../styles/serviceStyles/Digithree.module.scss";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function LowCodeThree() {
  return (
    <>
     <section>
          <SectionHeader
            heading="No Code/Low Code"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          {/* Your content goes here */}
        </section>
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Faster Development, Smarter Solutions
        </h1>

        <p>
          We help organizations implement no-code and low-code platforms to rapidly build and deploy applications. Our approach ensures solutions are scalable, secure, and tailored to specific business needs. By simplifying workflows and reducing development complexity, we accelerate time-to-market and improve operational efficiency. Each solution is designed to integrate seamlessly with existing systems while enabling rapid iteration. Our goal is to empower businesses to innovate faster, optimize processes, and achieve measurable results with confidence.
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
