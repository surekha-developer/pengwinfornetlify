// "use client";

// import Image from "next/image";
// import styles from "@/styles/aboutStyles/AboutHeroNew.module.scss";

// export default function AboutHeroNew({
//   heading = "About Us",
//   imageSrc = "/aerial-view-business-team.jpg",
// }) {
//   return (
//     <section className={styles.aboutHero}>
//       {/* Background Image */}
//       <Image
//         src={imageSrc}
//         alt="About Us"
//         fill
//         priority
//         className={styles.bgImage}
//       />

//       {/* Overlay */}
//       <div className={styles.overlay}></div>

//       {/* Content */}
//       <div className={styles.content}>
//         <h1>{heading}</h1>
//       </div>
//     </section>
//   );
// }
//........

"use client";

import Image from "next/image";
import styles from "@/styles/aboutStyles/AboutHeroNew.module.scss";

export default function AboutHeroNew({
  heading = "About Us",
  description = "Welcome to Pengwin Tech Solutions. We create smart digital solutions that help businesses grow. Our expert team delivers reliable, customized services to make your success simple and lasting.",
  imageSrc = "/aerial-view-business-team.jpg",
}) {
  return (
    <section className={styles.aboutHero}>
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="About Us"
        fill
        priority
        className={styles.bgImage}
      />

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
