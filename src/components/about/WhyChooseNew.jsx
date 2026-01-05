

// "use client";

// import { useEffect, useState, useRef } from "react";
// import styles from "../../styles/aboutStyles/WhyChooseNew.module.scss";

// export default function WhyChooseNew() {
//   const sectionRef = useRef(null);
//   const [startCount, setStartCount] = useState(false);

//   const statsData = [
//     { number: 18, text: "Team" },
//     { number: 8, text: "Happy Customers" },
//     { number: 12, text: "Projects Delivered" },
//   ];

//   const appsData = [
//     { number: 3, text: "IoT Apps" },
//     { number: 2, text: "Health Care" },
//     { number: 3, text: "Finance" },
//     { number: 2, text: "TV Apps" },
//     { number: 2, text: "Job Apps" },
//   ];

//   const [stats, setStats] = useState(statsData.map(() => 0));
//   const [apps, setApps] = useState(appsData.map(() => 0));

//   // Trigger count-up when section enters viewport
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setStartCount(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//   }, []);

//   // Count-up for stats
//   useEffect(() => {
//     if (!startCount) return;

//     statsData.forEach((item, index) => {
//       let start = 0;
//       const end = item.number;
//       const duration = 1500; // 1.5s
//       const increment = end / (duration / 30);

//       const counter = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           start = end;
//           clearInterval(counter);
//         }
//         setStats((prev) => {
//           const newStats = [...prev];
//           newStats[index] = Math.floor(start);
//           return newStats;
//         });
//       }, 30);
//     });
//   }, [startCount]);

//   // Count-up for apps
//   useEffect(() => {
//     if (!startCount) return;

//     appsData.forEach((item, index) => {
//       let start = 0;
//       const end = item.number;
//       const duration = 1500; // 1.5s
//       const increment = end / (duration / 30);

//       const counter = setInterval(() => {
//         start += increment;
//         if (start >= end) {
//           start = end;
//           clearInterval(counter);
//         }
//         setApps((prev) => {
//           const newApps = [...prev];
//           newApps[index] = Math.floor(start);
//           return newApps;
//         });
//       }, 30);
//     });
//   }, [startCount]);

//   return (
//     <section className={styles.whyChoose} ref={sectionRef}>
//       <div className={styles.overlay}></div>

//       <div className={styles.content}>
//         {/* Heading */}
//         <h2 className={styles.heading}>Why Choose Us</h2>

//         {/* Row 1 */}
//         <div className={styles.statsRow}>
//           {statsData.map((item, index) => (
//             <div key={item.text} className={styles.stat}>
//               <h2>{stats[index]}+</h2>
//               <p>{item.text}</p>
//             </div>
//           ))}
//         </div>

//         {/* Row 2 */}
//         <div className={styles.appsGrid}>
//           {appsData.map((item, index) => (
//             <div key={item.text} className={styles.app}>
//               {apps[index]}<br />
//               <span>{item.text}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
//...............

"use client";

import { useEffect, useState, useRef } from "react";
import styles from "../../styles/aboutStyles/WhyChooseNew.module.scss";
import { SiTicktick } from "react-icons/si";


export default function WhyChooseNew() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const dividerRef = useRef(null);
const [dividerVisible, setDividerVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setDividerVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.5 }
  );

  if (dividerRef.current) observer.observe(dividerRef.current);
}, []);


  const statsData = [
    { number: 18, text: "Team" },
    { number: 8, text: "Happy Customers" },
    { number: 12, text: "Projects Delivered" },
  ];

  const appsData = [
    { number: 3, text: "IoT Apps" },
    { number: 2, text: "Health Care" },
    { number: 3, text: "Finance" },
    { number: 2, text: "TV Apps" },
    { number: 2, text: "Job Apps" },
  ];

  // Extra points
  const pointsData = [
    "24/7 Support",
    "1 Year of innovative growth as a startup",
    "Agile, customer-focused, and scalable solutions",
    "Expertise across Front-End, Back-End, Cloud, and AI/ML",
    "Rapid adoption of any new technology for client success",
    "We started locally, but our solutions now serve global clients",
    "22+ Years of leadership experience in Sales & Business Strategy",
  ];

  const [stats, setStats] = useState(statsData.map(() => 0));
  const [apps, setApps] = useState(appsData.map(() => 0));

  // Trigger count-up when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  // Count-up for stats
  useEffect(() => {
    if (!startCount) return;

    statsData.forEach((item, index) => {
      let start = 0;
      const end = item.number;
      const duration = 1500; // 1.5s
      const increment = end / (duration / 30);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setStats((prev) => {
          const newStats = [...prev];
          newStats[index] = Math.floor(start);
          return newStats;
        });
      }, 30);
    });
  }, [startCount]);

  // Count-up for apps
  useEffect(() => {
    if (!startCount) return;

    appsData.forEach((item, index) => {
      let start = 0;
      const end = item.number;
      const duration = 1500; // 1.5s
      const increment = end / (duration / 30);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setApps((prev) => {
          const newApps = [...prev];
          newApps[index] = Math.floor(start);
          return newApps;
        });
      }, 30);
    });
  }, [startCount]);

  return (
    <section className={styles.whyChoose} ref={sectionRef}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        {/* Heading */}
        <h2 className={styles.heading}>Why Choose Us</h2>

        {/* Row 1 */}
        <div className={styles.statsRow}>
          {statsData.map((item, index) => (
            <div key={item.text} className={styles.stat}>
              <h2>{stats[index]}+</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className={styles.appsGrid}>
          {appsData.map((item, index) => (
            <div key={item.text} className={styles.app}>
              {apps[index]}<br />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        {/* Horizontal line */}
<hr ref={dividerRef} className={`${styles.divider} ${dividerVisible ? styles.active : ""}`} />


        {/* Row 3 - Extra Points */}
        {/* <div className={styles.pointsGrid}>
          {pointsData.map((point, index) => (
            <div key={index} className={styles.point}>
              • {point}
            </div>
          ))}
        </div> */}

{/* Row 3 - Extra Points */}
<div className={styles.pointsGrid}>
  {pointsData.map((point, index) => (
    <div key={index} className={styles.point}>
      <SiTicktick className={styles.tickIcon} /> {point}
    </div>
  ))}
</div>


      </div>
    </section>
  );
}
