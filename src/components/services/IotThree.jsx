import styles from "../../styles/serviceStyles/Digithree.module.scss";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function IoTThree() {
  return (
    <>
     <section>
          <SectionHeader
            heading="IoT Solutions"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          {/* Your content goes here */}
        </section>
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Connecting Devices, Empowering Insights
        </h1>

        <p>
          We help organizations implement IoT solutions that seamlessly integrate devices, systems, and data. Our approach ensures real-time monitoring, efficient automation, and actionable insights for better decision-making. Each solution is tailored to meet specific business needs while maintaining security, reliability, and scalability. By leveraging modern IoT technologies, we enhance operational efficiency and enable smarter workflows. Our goal is to empower organizations to innovate, optimize processes, and achieve measurable results with confidence.
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
