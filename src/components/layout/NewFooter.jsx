

// "use client";

// import Link from "next/link";
// import styles from "../../styles/layout/NewFooter.module.scss";
// import {
//   FaWhatsapp,
//   FaLinkedin,
//   FaInstagram,
//   FaFacebook,
//   FaTwitter,
//   FaPhone,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// import { motion } from "framer-motion";

// /* =======================
//    Animation Variants
// ======================= */
// const container = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// export default function NewFooter() {
//   return (
//     <footer className={styles.footer}>
//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         {/* ================= TOP BAR ================= */}
//         <motion.div className={styles.topBar} variants={fadeUp}>
//           <div className={styles.topContainer}>
//             <a href="tel:+919493323547" className={styles.topItem}>
//               <FaPhone className={styles.contactIcon} />
//               <span>+91 94933 23547</span>
//             </a>

//             <a href="mailto:info@pengwintech.com" className={styles.topItem}>
//               <FaEnvelope className={styles.contactIcon} />
//               <span>info@pengwintech.com</span>
//             </a>

//             <Link href="/contact#location" className={styles.topItem}>
//               <FaMapMarkerAlt className={styles.contactIcon} />
//               <span>
//                 Chandrika Vilasini, Mohana Block, Rajahmundry-533296
//               </span>
//             </Link>
//           </div>
//         </motion.div>

//         {/* ================= MAIN ================= */}
//         <div className={styles.main}>
//           <motion.div className={styles.company} variants={fadeUp}>
//             <img src="/nobgwhitemainlogo.png" alt="Pengwin Tech" />
//             <p>
//               Our skilled team at Pengwin Tech Solutions ensures complete client
//               satisfaction by delivering high-quality solutions and providing
//               24/7 support throughout every stage of your project.
//             </p>

//             <div className={styles.socialIcons}>
//               <a href="https://wa.me/919493323547" target="_blank">
//                 <FaWhatsapp />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/pengwintech/"
//                 target="_blank"
//               >
//                 <FaLinkedin />
//               </a>
//               <a href="https://www.instagram.com/pengwintech" target="_blank">
//                 <FaInstagram />
//               </a>
//               <a
//                 href="https://www.facebook.com/people/Pengwin-Tech-Solutions/61574496058132/"
//                 target="_blank"
//               >
//                 <FaFacebook />
//               </a>
//               <a href="https://twitter.com/" target="_blank">
//                 <FaTwitter />
//               </a>
//             </div>
//           </motion.div>

//           <motion.div className={styles.services} variants={fadeUp}>
//             <h4>Services</h4>
//             <ul>
//               <li>Fullstack Development</li>
//               <li>Apps</li>
//               <li>Web Application Development</li>
//               <li>Support & Maintenance</li>
//               <li>Industries</li>
//             </ul>
//           </motion.div>

//           <motion.div className={styles.middleware} variants={fadeUp}>
//             <h4>Middleware Integration</h4>
//             <ul>
//               <li>IBM API Connect</li>
//               <li>IBM DataPower</li>
//               <li>IBM App Connect Enterprise (ACE)</li>
//               <li>IBM Aspera</li>
//               <li>IBM Cloud Pak for Integration (CP4I)</li>
//               <li>IBM MQ</li>
//             </ul>
//           </motion.div>

// {/* <motion.div className={styles.services} variants={fadeUp}>
//   <h4>Services</h4>

//   <div className={styles.serviceLists}>
  
//     <ul>
//       <li>Fullstack Development</li>
//       <li>Apps</li>
//       <li>Web Application Development</li>
//       <li>Support & Maintenance</li>
//       <li>Industries</li>
//     </ul>

    
//     <ul>
//       <li>Product Engineering</li>
//       <li>Business Assurance Services</li>
//       <li>Integration Services</li>
//       <li>AI Solutions Services</li>
//       <li>Staff Augmentation</li>
//     </ul>
//   </div>
// </motion.div> */}



//         </div>

//         {/* ================= BOTTOM ================= */}
//         <motion.div className={styles.bottom} variants={fadeUp}>
//           © Copyright 2025 by Pengwin Tech Solutions
//         </motion.div>
//       </motion.div>
//     </footer>
//   );
// }
//...................



"use client";

import Link from "next/link";
import styles from "../../styles/layout/NewFooter.module.scss";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";

/* =======================
   Animation Variants
======================= */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function NewFooter() {
  return (
    <footer className={styles.footer}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* ================= TOP BAR ================= */}
        <motion.div className={styles.topBar} variants={fadeUp}>
          <div className={styles.topContainer}>
            <a href="tel:+919493323547" className={styles.topItem}>
              <FaPhone className={styles.contactIcon} />
              <span>+91 94933 23547</span>
            </a>

            <a href="mailto:info@pengwintech.com" className={styles.topItem}>
              <FaEnvelope className={styles.contactIcon} />
              <span>info@pengwintech.com</span>
            </a>

            <Link href="/contact#location" className={styles.topItem}>
              <FaMapMarkerAlt className={styles.contactIcon} />
              <span>
                Chandrika Vilasini, Mohana Block, Rajahmundry-533296
              </span>
            </Link>
          </div>
        </motion.div>

        {/* ================= MAIN ================= */}
        <div className={styles.main}>
          <motion.div className={styles.company} variants={fadeUp}>
            <img src="/nobgwhitemainlogo.png" alt="Pengwin Tech" />
            <p>
              Our skilled team at Pengwin Tech Solutions ensures complete client
              satisfaction by delivering high-quality solutions and providing
              24/7 support throughout every stage of your project.
            </p>

            <div className={styles.socialIcons}>
              <a href="https://wa.me/919493323547" target="_blank">
                <FaWhatsapp />
              </a>
              <a
                href="https://www.linkedin.com/company/pengwintech/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/pengwintech" target="_blank">
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/people/Pengwin-Tech-Solutions/61574496058132/"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a href="https://twitter.com/" target="_blank">
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          {/* <motion.div className={styles.services} variants={fadeUp}>
            <h4>Services</h4>
            <ul>
              <li>Fullstack Development</li>
              <li>Apps</li>
              <li>Web Application Development</li>
              <li>Support & Maintenance</li>
              <li>Industries</li>
            </ul>
          </motion.div>

          <motion.div className={styles.middleware} variants={fadeUp}>
            <h4>Middleware Integration</h4>
            <ul>
              <li>IBM API Connect</li>
              <li>IBM DataPower</li>
              <li>IBM App Connect Enterprise (ACE)</li>
              <li>IBM Aspera</li>
              <li>IBM Cloud Pak for Integration (CP4I)</li>
              <li>IBM MQ</li>
            </ul>
          </motion.div> */}

<motion.div className={styles.services} variants={fadeUp}>
  <h4>Services</h4>

  <div className={styles.serviceLists}>
  
    <ul>
      <li>Fullstack Development</li>
      <li>Apps</li>
      <li>Web Application Development</li>
      <li>Support & Maintenance</li>
      <li>Industries</li>
    </ul>

    
    <ul>
      <li>Product Engineering</li>
      <li>Business Assurance Services</li>
      <li>Integration Services</li>
      <li>AI Solutions Services</li>
      <li>Staff Augmentation</li>
    </ul>
  </div>
</motion.div>



        </div>

        {/* ================= BOTTOM ================= */}
        <motion.div className={styles.bottom} variants={fadeUp}>
          © Copyright 2026 by Pengwin Tech Solutions
        </motion.div>
      </motion.div>
    </footer>
  );
}
