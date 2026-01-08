import styles from "../../styles/serviceStyles/Digithree.module.scss";
import Image from "next/image";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function CloudThree() {
  return (
    <>
     <section>
          <SectionHeader
            heading="Cloud Services"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          {/* Your content goes here */}
        </section>
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>
          Empowering Growth Through Cloud Excellence
        </h1>

        <p>
         We help organizations design and implement cloud solutions that are secure, scalable, and tailored to their needs. Our approach ensures seamless migration, efficient resource management, and reliable performance across platforms. By leveraging modern cloud technologies, we enhance collaboration, streamline workflows, and support data-driven decisions. Each solution is customized to align with business objectives, maintain security, and optimize costs. Our goal is to empower organizations to operate more efficiently, innovate faster, and scale with confidence in the cloud.
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
