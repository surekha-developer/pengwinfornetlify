import Image from "next/image";
import styles from "../../../styles/serviceStyles/Digithree.module.scss";
import SectionHeader from "@/components/SectionHeader/SectionHeader";


export default function ServiceHero({
  headerTitle,
  headerText,
  title,
  description,
}) {
  return (
    <>
      <section>
        <SectionHeader heading={headerTitle} text={headerText} />
      </section>

      <section className={styles.hero}>
        {/* LEFT CONTENT (DYNAMIC) */}
        <div className={styles.content}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        {/* RIGHT CUBE (STATIC) */}
        <div className={styles.cube}>
          <div className={`${styles.face} ${styles.front}`}>
            <Image src="/imageswebp/Nocodeimg.webp" alt="Front" fill />
          </div>
          <div className={`${styles.face} ${styles.back}`}>
            <Image src="/imageswebp/digi2.webp" alt="Back" fill />
          </div>
          <div className={`${styles.face} ${styles.left}`}>
            <Image src="/imageswebp/digi.webp" alt="Left" fill />
          </div>
          <div className={`${styles.face} ${styles.right}`}>
            <Image src="/imageswebp/cloudimg.webp" alt="Right" fill />
          </div>
          <div className={`${styles.face} ${styles.top}`}>
            <Image src="/imageswebp/digit3.webp" alt="Top" fill />
          </div>
          <div className={`${styles.face} ${styles.bottom}`}>
            <Image src="/imageswebp/staffimg.webp" alt="Bottom" fill />
          </div>
        </div>
      </section>
    </>
  );
}
