

// // "use client";

// // import styles from "../../styles/homeStyles/Strengths.module.scss";
// // import StrengthCard from "./StrengthCard";

// // const strengthsData = [
// //   { image: "/strengthcustomer.png", title: "Customers", subtitle: "100+ happy clients" },
// //   { image: "/strengthproject.png", title: "Projects", subtitle: "50+ completed projects" },
// //   { image: "/strengthtimerbg.png", title: "Hours of Consulting", subtitle: "2000+ hours" },
// // ];

// // export default function StrengthsSection() {
// //   return (
// //     <section className={styles.strengths}>
// //       <div className={styles.container}>
// //         <div className={styles.heading}>
// //           <h1>Our Strengths</h1>
// //           <p>Who We Are</p>
// //         </div>

// //         <div className={styles.cards}>
// //           {strengthsData.map((item, index) => (
// //             <StrengthCard
// //               key={index}
// //               image={item.image}
// //               title={item.title}
// //               subtitle={item.subtitle}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// //...............................

// "use client";

// import styles from "../../styles/homeStyles/Strengths.module.scss";
// import StrengthCard from "./StrengthCard";

// const strengthsData = [
//   { image: "/strengthcustomer.png", title: "Customers", subtitle: "100+ happy clients" },
//   { image: "/strengthproject.png", title: "Projects", subtitle: "50+ completed projects" },
//   { image: "/strengthtimerbg.png", title: "Hours of Consulting", subtitle: "2000+ hours" },
// ];

// export default function StrengthsSection() {
//   return (
//     <section className={styles.strengths}>
//       <div className={styles.container}>
//         <div className={styles.heading}>
//           <h1>Our Strengths</h1>
//           <p>Who We Are</p>
//         </div>

//         <div className={styles.cards}>
//           {strengthsData.map((item, index) => (
//             <StrengthCard
//               key={index}
//               index={index}
//               image={item.image}
//               title={item.title}
//               subtitle={item.subtitle}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
//.............................

// "use client";

// import { useEffect, useRef, useState } from "react";
// import styles from "../../styles/homeStyles/Strengths.module.scss";
// import StrengthCard from "./StrengthCard";

// const strengthsData = [
//   { image: "/strengthcustomer.png", title: "Customers" },
//   { image: "/strengthproject.png", title: "Projects" },
//   { image: "/strengthtimerbg.png", title: "Hours of Consulting" },
// ];

// export default function StrengthsSection() {
//   const sectionRef = useRef();
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(sectionRef.current); // trigger only once
//         }
//       },
//       { threshold: 0.2 } // trigger when 20% visible
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       className={`${styles.strengths} ${isVisible ? styles.visible : ""}`}
//       ref={sectionRef}
//     >
//       <div className={styles.container}>
//         {/* Heading */}
//         <div className={styles.heading}>
//           <h1>Our Strengths</h1>
//           <p>Who We Are</p>
//         </div>

//         {/* Cards */}
//         <div className={styles.cards}>
//           {strengthsData.map((item, index) => (
//             <StrengthCard
//               key={index}
//               image={item.image}
//               title={item.title}
//               style={{ animationDelay: `${index * 0.3}s` }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
//........................


"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../../styles/homeStyles/Strengths.module.scss";
import StrengthCard from "./StrengthCard";

const strengthsData = [
  { image: "/strengthcustomer.png", number: "100+", title: "Customers" },
  { image: "/strengthproject.png", number: "50+", title: "Projects" },
  { image: "/strengthtimerbg.png", number: "1500+", title: "Hours of Consulting" },
];

export default function StrengthsSection() {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`${styles.strengths} ${isVisible ? styles.visible : ""}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          {/* <h1>Our Strengths</h1> */}
          <p>Who We Are</p>
        </div>

        {/* Cards */}
        <div className={styles.cards}>
          {strengthsData.map((item, index) => (
            <StrengthCard
              key={index}
              image={item.image}
              number={item.number}
              title={item.title}
              index={index}
              animate={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
