'use client';

import Link from 'next/link';
import styles from '../../styles/serviceStyles/WouldConnect.module.scss';

export default function WouldConnect() {
  return (
    <section className={styles.section}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p className={styles.subText}>
          // We’re here to support you with expert guidance—24/7
        </p>

        <h2 className={styles.heading}>
         Would you like to connect with us ?
        </h2>
 
 <Link href="/contact">
        <button className={styles.button}>
          Let's Connect
        </button>
        </Link> 
      </div>
    </section>
  );
}
//............

// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import styles from '../../styles/serviceStyles/WouldConnect.module.scss';

// export default function WouldConnect() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.overlay} />

// <motion.div
//   className={styles.content}
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true }}
//   variants={{
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.2 },
//     },
//   }}
// >
//   <motion.p
//     className={styles.subText}
//     variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
//   >
//     // We’re here to support you with expert guidance—24/7
//   </motion.p>

//   <motion.h2
//     className={styles.heading}
//     variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
//   >
//     Would you like to connect with us?
//   </motion.h2>

//   <motion.button
//     className={styles.button}
//     variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
//   >
//     Let's Connect
//   </motion.button>

  
// </motion.div>


//     </section>
//   );
// }
