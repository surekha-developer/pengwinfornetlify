// "use client";

// import Image from "next/image";
// import styles from "../../styles/aboutStyles/AboutTopSection.module.scss";
// import { FaHandshake, FaCheckCircle, FaUsers } from "react-icons/fa";
// import SectionHeader from "../SectionHeader/SectionHeader";

// export default function AboutTopSection() {
//   return (
//     <>
    
//     <section className={styles.howWeWork}>
//               <div className={styles.topContent}>
//         <h2 className={styles.typing}>About Us</h2>
//         <p>
//           We help businesses grow by delivering innovative, scalable and
//           customer-focused digital solutions that create real impact.
//         </p>
//       </div>
//       <div className={styles.container}>

        
        
//         {/* LEFT CONTENT */}
//         <div className={styles.content}>
//           <h2>How We Work</h2>

//           <div className={styles.item}>
//             <span className={styles.icon}>
//               <FaHandshake />
//             </span>
//             <div>
//               <h4>Client-Centric Engagement</h4>
//               <p>
//                 We work closely with our clients to understand their business objectives, current challenges, and long-term vision, ensuring every solution is aligned with their goals.
//               </p>
//             </div>
//           </div>

//           <div className={styles.item}>
//             <span className={styles.icon}>
//               <FaCheckCircle />
//             </span>
//             <div>
//               <h4>Solutions Over Services</h4>
//               <p>
//                 We focus on delivering meaningful solutions rather than standalone services, addressing real business problems with scalable and result-driven approaches.
//               </p>
//             </div>
//           </div>

//           <div className={styles.item}>
//             <span className={styles.icon}>
//               <FaUsers />
//             </span>
//             <div>
//               <h4>Teamwork</h4>
//               <p>
//                 We believe in shared success with our clients. More than just an IT vendor, we go one step further by becoming a trusted partner in their growth journey.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className={styles.imageBox}>
//           <Image
//             src="/homecaro2.jpg"
//             alt="How We Work"
//             fill
//             priority
//           />
//         </div>

//       </div>
//     </section>
//     </>
//   );
// }
//....................


"use client";

import Image from "next/image";
// import { useEffect } from "react";

import styles from "../../styles/aboutStyles/AboutTopSection.module.scss";
import { FaHandshake, FaCheckCircle, FaUsers } from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useEffect } from "react";

export default function AboutTopSection() {

useEffect(() => {
  const el = document.getElementById("aboutContent");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add(styles.active);
      }
    },
    { threshold: 0.3 }
  );

  if (el) observer.observe(el);

  return () => observer.disconnect();
}, []);



  return (
    <>
    
    <section className={styles.howWeWork}>
              <div className={styles.topContent}>
        <h2 className={styles.typing}>About Us</h2>
       <p className={styles.wipeUp}>
  We help businesses grow by delivering innovative, scalable and
  customer-focused digital solutions that create real impact.
</p>
      </div>
      <div className={styles.container}>

        
        
        {/* LEFT CONTENT */}
        <div className={styles.content}>
        {/* <div className={`${styles.content} ${styles.slideIn}`} id="aboutContent"> */}
          <h2>How We Work</h2>

          <div className={styles.item}>
            <span className={styles.icon}>
              <FaHandshake />
            </span>
            <div>
              <h4>Client-Centric Engagement</h4>
              <p>
                We work closely with our clients to understand their business objectives, current challenges, and long-term vision, ensuring every solution is aligned with their goals.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.icon}>
              <FaCheckCircle />
            </span>
            <div>
              <h4>Solutions Over Services</h4>
              <p>
                We focus on delivering meaningful solutions rather than standalone services, addressing real business problems with scalable and result-driven approaches.
              </p>
            </div>
          </div>

          <div className={styles.item}>
            <span className={styles.icon}>
              <FaUsers />
            </span>
            <div>
              <h4>Teamwork</h4>
              <p>
                We believe in shared success with our clients. More than just an IT vendor, we go one step further by becoming a trusted partner in their growth journey.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src="/homecaro2.jpg"
            alt="How We Work"
            fill
            priority
          />
        </div>

      </div>
    </section>
    </>
  );
}
