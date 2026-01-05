// "use client";

// import Image from "next/image";
// import styles from "@/styles/homeStyles/ourStrengthNew.module.scss";

// export default function OurStrengthNew({ 
//   heading = "Our Strengths", 
//   imageSrc = "/ourStrengthNew2.jpg", 
//   text = "We provide cutting-edge software solutions, focusing on innovation, scalability, and excellence in execution. Our team of experts ensures high-quality products that empower businesses to achieve digital transformation."
// }) {
//   return (
//     <section className={styles.ourStrength}>
//       <div className={styles.container}>
//         {/* Left Text */}
//         <div className={styles.textSection}>
//           <h2>{heading}</h2>
//           <p>{text}</p>
//         </div>

//         {/* Right Image */}
//         <div className={styles.imageSection}>
//           <Image 
//             src={imageSrc} 
//             alt={heading} 
//             fill
//             style={{ objectFit: "cover", objectPosition: "center" }}
//             priority
//           />
//         </div>
        
//       </div>
//     </section>
//   );
// }
//..............

// "use client";

// import Image from "next/image";
// import styles from "@/styles/homeStyles/ourStrengthNew.module.scss";

// export default function OurStrengthNew({ 
//   heading = "Our Strengths", 
//   imageSrc = "/ourStrengthNew3.jpg", 
//   text = "We provide cutting-edge software solutions, focusing on innovation, scalability, and excellence in execution. Our team of experts ensures high-quality products that empower businesses to achieve digital transformation."
// }) {
//   return (
//     <section className={styles.ourStrength}>
//       <div className={styles.container}>
//         {/* Left Text */}
//         <div className={styles.textSection}>
//           <h2>{heading}</h2>
//           <p>{text}</p>
//         </div>

//         {/* Right Image */}
//         <div className={styles.imageSection}>
//           <Image 
//             src={imageSrc} 
//             alt={heading} 
//             fill
//             style={{ objectFit: "cover", objectPosition: "center" }}
//             priority
//           />
//         </div>
        
//       </div>
//     </section>
//   );
// }
//................

"use client";

import Image from "next/image";
import styles from "@/styles/homeStyles/ourStrengthNew.module.scss";

export default function OurStrengthNew({ 
  heading = "Our Strengths", 
  imageSrc = "/ourStrengthNew3.jpg", 
  text = "We provide cutting-edge software solutions, focusing on innovation, scalability, and excellence in execution. Our team of experts ensures high-quality products that empower businesses to achieve digital transformation.",
  points = [
    "Custom Mobile App Development",
    "Website & Web-App Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "Cloud & Server Deployments"
  ]
}) {
  return (
    <section className={styles.ourStrength}>
      <div className={styles.container}>
        {/* Left Text */}
        <div className={styles.textSection}>
          <h2>{heading}</h2>
          <p>{text}</p>

          <ul className={styles.points}>
            {points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className={styles.imageSection}>
          <Image 
            src={imageSrc} 
            alt={heading} 
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
