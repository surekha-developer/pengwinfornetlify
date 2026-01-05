'use client';

import Link from 'next/link';
import styles from '../../styles/homeStyles/NeedConsultation.module.scss';

export default function NeedConsultation() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.subText}>
          // Drop us a line! We are here to answer your questions 24/7
        </p>

        <h2 className={styles.heading}>
          NEED A CONSULTATION?
        </h2>
 
<Link href="/contact">
        <button className={styles.button}>
          CONTACT US
        </button>
        </Link>
      </div>
    </section>
  );
}
