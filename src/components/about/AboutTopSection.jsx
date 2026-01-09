"use client";

import Image from "next/image";
import styles from "../../styles/aboutStyles/AboutTopSection.module.scss";
import { FaHandshake, FaCheckCircle, FaUsers } from "react-icons/fa";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function AboutTopSection() {
  return (
    <>
    
    <section className={styles.howWeWork}>
              <div className={styles.topContent}>
        <h2>About Us</h2>
        <p>
          We help businesses grow by delivering innovative, scalable and
          customer-focused digital solutions that create real impact.
        </p>
      </div>
      <div className={styles.container}>

        
        
        {/* LEFT CONTENT */}
        <div className={styles.content}>
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
//..............

// "use client";

// import Image from "next/image";
// import styles from "../../styles/aboutStyles/AboutTopSection.module.scss";
// import { FaHandshake, FaCheckCircle, FaUsers } from "react-icons/fa";

// export default function AboutTopSection() {
//   return (
//     <section className={styles.aboutSection}>
      
//       {/* TOP HEADING */}
    //   <div className={styles.topContent}>
    //     <h2>About Us</h2>
    //     <p>
    //       We help businesses grow by delivering innovative, scalable and
    //       customer-focused digital solutions that create real impact.
    //     </p>
    //   </div>

//       {/* MAIN CONTENT */}
//       <div className={styles.container}>
        
//         {/* LEFT TEXT */}
//         <div className={styles.content}>
//           <div className={styles.item}>
//             <span className={styles.icon}>
//               <FaHandshake />
//             </span>
//             <div>
//               <h4>High Level Customer Engagement</h4>
//               <p>
//                 We work closely with our customers to understand their business
//                 goals and create strategies that deliver measurable results.
//               </p>
//             </div>
//           </div>

//           <div className={styles.item}>
//             <span className={styles.icon}>
//               <FaCheckCircle />
//             </span>
//             <div>
//               <h4>Solutions, not Services</h4>
//               <p>
//                 Our focus is on providing long-term solutions that solve real
//                 business problems, not just delivering services.
//               </p>
//             </div>
//           </div>

//           <div className={styles.item}>
//             <span className={styles.icon}>
//               <FaUsers />
//             </span>
//             <div>
//               <h4>Teamwork & Partnership</h4>
//               <p>
//                 We believe in building lasting partnerships and growing
//                 together with our clients through collaboration.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className={styles.imageBox}>
//           <Image
//             src="/homecaro2.jpg"
//             alt="About Us"
//             fill
//             priority
//           />
//         </div>

//       </div>
//     </section>
//   );
// }
