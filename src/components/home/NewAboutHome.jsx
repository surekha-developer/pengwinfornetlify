// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import styles from "@/styles/homeStyles/NewAboutHome.module.scss";

// export default function NewAboutHome() {
//   return (
//     <section className={styles.aboutSection}>
//       <div className={styles.container}>

//         {/* ================= LEFT CONTENT ================= */}
//         <div className={styles.left}>
//           <span className={styles.tag}>// About Us</span>

//           <h2>
//             We Build Smart Digital Solutions for Growing Businesses
            
//           </h2>

//           <p>
//            PengWIN is a passionate, technology-driven software development company with 1+ year of experience, founded with the purpose of creating practical, scalable, and impactful digital solutions. From web applications to enterprise systems, we focus on quality, transparency, and long-term client success, helping businesses grow and thrive in a rapidly evolving digital world.
//           </p>

//           {/* Stats */}
//           <div className={styles.stats}>
//             <div>
//               <h3>18+</h3>
//               <span>Team</span>
//             </div>
//             <div>
//               <h3>8+</h3>
//               <span>Happy Customers</span>
//             </div>
//             <div>
//               <h3>12+</h3>
//               <span>Projects Delivered</span>
//             </div>
//           </div>

//           <Link href="/about" className={styles.aboutBtn}>
//             Know More About Us →
//           </Link>
//         </div>

//         {/* ================= RIGHT IMAGES ================= */}
//         <div className={styles.right}>
//   <div className={styles.grid}>

//     <div className={styles.cardItem}>
//       <Link href="/about">
//         <div className={`${styles.card} ${styles.tall}`}>
//           <Image src="/homecaro3.jpg" alt="Our Mission" fill />
//           <span>Our Mission</span>
//         </div>
//       </Link>
//     </div>

//     <div className={styles.cardItem}>
//       <Link href="/about">
//         <div className={`${styles.card} ${styles.tall}`}>
//           <Image src="/vision.jpg" alt="Our Vision" fill />
//           <span>Our Vision</span>
//         </div>
//       </Link>
//     </div>

//     <div className={styles.cardItem}>
//       <Link href="/about">
//         <div className={`${styles.card} ${styles.tall}`}>
//           <Image src="/homecaro2.jpg" alt="Our Team" fill />
//           <span>Our Team</span>
//         </div>
//       </Link>
//     </div>

//     <div className={styles.cardItem}>
//       <Link href="/contact">
//         <div className={`${styles.card} ${styles.tall}`}>
//           <Image src="/getinTouchHome.jpg" alt="Get in Touch" fill />
//           <span>Get in Touch</span>
//         </div>
//       </Link>
//     </div>

//   </div>
// </div>


//       </div>
//     </section>
//   );
// }
//..................

"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/homeStyles/NewAboutHome.module.scss";
import { motion } from "framer-motion";

export default function NewAboutHome() {
  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className={styles.left}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={fadeUp}
        >
          <span className={styles.tag}>// About Us</span>

          <h2>
            We Build Smart Digital Solutions for Growing Businesses
          </h2>

          <p>
           PengWIN is a passionate, technology-driven software development company with 1+ year of experience, founded with the purpose of creating practical, scalable, and impactful digital solutions. From web applications to enterprise systems, we focus on quality, transparency, and long-term client success, helping businesses grow and thrive in a rapidly evolving digital world.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>18+</h3>
              <span>Team</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>8+</h3>
              <span>Happy Customers</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3>12+</h3>
              <span>Projects Delivered</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/about" className={styles.aboutBtn}>
              Know More About Us →
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGES ================= */}
        <motion.div
          className={styles.right}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <div className={styles.grid}>
            {[
              { src: "/homecaro3.jpg", alt: "Our Mission", link: "/about", label: "Our Mission" },
              { src: "/vision.jpg", alt: "Our Vision", link: "/about", label: "Our Vision" },
              { src: "/homecaro2.jpg", alt: "Our Team", link: "/about", label: "Our Team" },
              { src: "/getinTouchHome.jpg", alt: "Get in Touch", link: "/contact", label: "Get in Touch" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.cardItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link href={item.link}>
                  <div className={`${styles.card} ${styles.tall}`}>
                    <Image src={item.src} alt={item.alt} fill />
                    <span>{item.label}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
