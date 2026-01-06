

// "use client";
// import { useEffect, useRef } from "react";
// import styles from "../../styles/homeStyles/NewServicesTimeLine.module.scss";

// const services = [
//   {
//     title: "Digital Transformation",
//     description:
//       "Seamlessly engage your customers through innovative digital solutions.",
//     image: "/homecaro2.jpg",
//   },
//   {
//     title: "Middleware Integrations",
//     description:
//       "We help businesses seamlessly connect multiple software systems for smooth operations.",
//     image: "/robohand2.jpg",
//   },
//   {
//     title: "Software Consulting",
//     description:
//       "Analyze your current IT infrastructure and identify growth opportunities.",
//     image: "/robohand2.jpg",
//   },
//   {
//     title: "Cloud Services",
//     description:
//       "Deploy scalable cloud infrastructure designed to meet your business needs. Ensure reliable performance, secure data storage, and seamless cloud adoption for smooth operations.",
//     image: "/robohand2.jpg",
//   },
//   {
//     title: "Staff Augmentation",
//     description:
//       "Flexible Staff Augmentation — providing skilled professionals on demand to strengthen your team and drive results.",
//     image: "/robohand2.jpg",
//   },
//   {
//     title: "IoT Solutions and Services",
//     description:
//       "IoT Solutions — paving the way for a connected future, your one-stop shop for smart, seamless IoT services.",
//     image: "/robohand2.jpg",
//   },
//   {
//     title: "No Code / Low Code Implementations",
//     description:
//       "No Code & Low Code Solutions — empowering rapid delivery by building efficient apps with minimal coding.",
//     image: "/robohand2.jpg",
//   },
// ];

// export default function NewServicesTimeline() {
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.active);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     itemsRef.current.forEach((item) => observer.observe(item));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className={styles.services}>
//       <h2 className={styles.title}>Our Services</h2>

//       <div className={styles.timeline}>
//         {services.map((service, index) => (
//           <div
//             key={index}
//             ref={(el) => (itemsRef.current[index] = el)}
//             className={`${styles.timelineItem} ${
//               index % 2 === 0 ? styles.left : styles.right
//             }`}
//           >
//             <div
//               className={styles.card}
//               style={{ backgroundImage: `url(${service.image})` }}
//             >
//               <div className={styles.overlay}></div>

//               <div className={styles.content}>
//                 <h3>{service.title}</h3>
//                 <p>{service.description}</p>
//               </div>
//             </div>

//             <span className={styles.dot}></span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


//......................above code is timeline, below code is like blogs.........................***********************

"use client";

import Image from "next/image";
import styles from "../../styles/homeStyles/NewServicesTimeLine.module.scss";
import { FaRegComments, FaTag } from "react-icons/fa";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/digi.jpg",
    date: "Digital Transformation",
    title:
      "We help businesses modernize processes and deliver seamless, innovative digital experiences.",
  },
  {
    id: 2,
    image: "/digit3.jpg",
    date: "MiddleWare Integrations",
    title:
      "We help businesses seamlessly connect multiple software systems for smooth operations",
  },
  {
    id: 3,
    image: "/digi2.jpg",
    date: "Software Consulting",
    title:
      "Analyze your current IT infrastructure and identify growth opportunities",
  },
];

export default function NewServicesTimeline() {
  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <span className={styles.subTitle}>OUR SERVICES</span>
          <h2>EMPOWERING YOUR BUSINESS WITH TECHNOLOGY</h2>
        </div>

        {/* Blog Cards */}
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className={styles.image}
                />
                <span className={styles.date}>{blog.date}</span>
              </div>

              <div className={styles.content}>
                <div className={styles.meta}>
                  {/* <span>
                    <FaRegComments /> Comments Off
                  </span>
                  <span>
                    <FaTag /> Development
                  </span> */}
                </div>

                <h3>{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        {/* <div className={styles.btnWrapper}>
          <button>VIEW ALL Services</button>
        </div> */}
<div className={styles.btnWrapper}>
  <Link href="/services">
    <button>VIEW ALL Services</button>
  </Link>
</div>


      </div>
    </section>
  );
}
