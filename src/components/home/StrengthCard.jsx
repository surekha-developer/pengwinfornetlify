

// "use client";

// import Image from "next/image";
// import styles from "../../styles/homeStyles/Strengths.module.scss";

// export default function StrengthCard({ image, title, subtitle }) {
//   return (
//     <div className={styles.card}>
//       <Image src={image} alt={title} width={80} height={80} />
//       <h3>{title}</h3>
//       <p>{subtitle}</p>
//     </div>
//   );
// }

//.............

// "use client";

// import Image from "next/image";
// import styles from "../../styles/homeStyles/Strengths.module.scss";

// export default function StrengthCard({ image, title, subtitle, index }) {
//   return (
//     <div
//       className={styles.card}
//       style={{ animationDelay: `${index * 0.2}s` }} // stagger animation
//     >
//       <Image src={image} alt={title} width={80} height={80} />
//       <h3>{title}</h3>
//       <p>{subtitle}</p>
//     </div>
//   );
// }
//..............

// "use client";

// import Image from "next/image";
// import styles from "../../styles/homeStyles/Strengths.module.scss";

// export default function StrengthCard({ image, number, title, index }) {
//   return (
//     <div
//       className={styles.card}
//       style={{ animationDelay: `${index * 0.3}s` }}
//     >
//       <Image src={image} alt={title} width={180} height={100} />
//       <h2 className={styles.number}>{number}</h2>
//       <h3 className={styles.title}>{title}</h3>
//     </div>
//   )
// }
//...............above ccode is good


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/homeStyles/Strengths.module.scss";

export default function StrengthCard({ image, number, title, index, animate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    let start = 0;
    const end = parseInt(number); // remove + for counting
    const duration = 1500; // animation duration in ms
    const stepTime = Math.abs(Math.floor(duration / end));

    let current = start;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [animate, number]);

  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={180} height={100} />

      <div className={styles.number}>{count}{number.includes('+') ? '+' : ''}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
