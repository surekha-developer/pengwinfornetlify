// "use client";

// import { useEffect } from "react";
// import styles from "@/styles/aboutStyles/ThreeCardsVMV.module.scss";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const cards = [
//   {
//     icon: "/icons/vision.svg",
//     title: "Our Vision",
//     description:
//       "To be a leading tech partner, delivering innovative digital solutions that empower businesses worldwide.",
//   },
//   {
//     icon: "/icons/mission.svg",
//     title: "Our Mission",
//     description:
//       "To create smart, reliable, and customized technology solutions that drive growth and success for our clients.",
//   },
//   {
//     icon: "/icons/values.svg",
//     title: "Our Values",
//     description:
//       "Integrity, innovation, collaboration, and excellence guide everything we do to deliver outstanding results.",
//   },
// ];

// export default function VisionMissionValues() {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <section className={styles.vmvSection}>
//       <div className={styles.container}>
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={styles.card}
//             data-aos="fade-up"
//             data-aos-delay={index * 200}
//           >
//             <div className={styles.icon}>
//               <img src={card.icon} alt={card.title} />
//             </div>
//             <h3>{card.title}</h3>
//             <p>{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
//..................


"use client";

import { useEffect } from "react";
import styles from "@/styles/aboutStyles/ThreeCardsVMV.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiTicktick } from "react-icons/si";

// const cards = [
//   {
//     title: "Our Mission",
//     description:
//       "At PengWIN, our mission is to empower businesses through innovative, cutting-edge software solutions that drive transformation and growth. We aim to unlock the full potential of our clients by optimizing operations, enhancing efficiency, and enabling them to thrive in a rapidly evolving digital landscape.",
//     points: [
//       "Innovate with Purpose: Develop smart, scalable, and customized software solutions.",
//       "Boost Efficiency: Streamline workflows and automate processes for maximum productivity.",
//       "Unlock Business Potential: Enable growth, scalability, and digital competitiveness.",
//       "Transform Operations: Modernize systems to stay ahead in the digital era.",
//       "Deliver Exceptional Results: Provide reliable implementation and continuous support to ensure success.",
//     ],
//   },
//   {
//     title: "Our Vision",
//     description:
//       "Our vision at PengWIN is to be a global leader in software innovation, empowering businesses to harness the power of technology and thrive in an ever-evolving digital world. We envision creating transformative solutions that drive growth, efficiency, and long-term success for our clients.",
//     points: [
//       "Lead in Innovation: Continuously develop next-generation software solutions.",
//       "Enable Digital Transformation: Help businesses evolve and adapt with technology.",
//       "Drive Growth & Success: Deliver measurable impact and sustainable business results.",
//       "Foster Long-term Partnerships: Support clients with ongoing expertise and guidance.",
//     ],
//   },
//   {
//     title: "Our Values",
//     description:
//       "At PengWIN, our core values guide everything we do. We prioritize integrity, innovation, collaboration, and excellence to deliver exceptional solutions that make a real difference for our clients.",
//     points: [
//       "Integrity: Maintain honesty and transparency in all interactions.",
//       "Innovation: Continuously improve and create forward-thinking solutions.",
//       "Collaboration: Work closely with clients and teams to achieve the best results.",
//       "Excellence: Strive for the highest standards in every project we deliver.",
//       "Client Success: Focus on outcomes that ensure sustainable growth and satisfaction.",
//     ],
//   },
// ];


const cards = [
  {
    title: "Mission",
    description:
      "At PengWIN, our mission is to empower businesses with innovative software solutions that drive growth and efficiency.",
    points: [
      "Innovate with Purpose: Deliver smart and customized software solutions.",
      "Boost Efficiency: Streamline workflows and optimize operations.",
      "Ensure Success: Provide reliable support and measurable results.",
    ],
  },
  {
    title: "Vision",
    description:
      "Our vision is to be a global leader in software innovation, helping businesses thrive in a digital world.",
    points: [
      "Lead in Innovation: Continuously create next-generation solutions.",
      "Enable Growth: Support businesses in digital transformation.",
      "Foster Partnerships: Build lasting client relationships with expertise.",
    ],
  },
  {
    title: "Values",
    description:
      "Our core values guide everything we do, ensuring integrity, innovation, and excellence in every project.",
    points: [
      "Integrity & Transparency: Always honest and reliable.",
      "Innovation & Excellence: Strive for high-quality, forward-thinking solutions.",
      "Collaboration & Success: Work closely with clients to achieve results.",
    ],
  },
];

export default function VisionMissionValuesCards() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className={styles.vmvSection}>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ul>
              {card.points.map((point, idx) => (
                <li key={idx}>
                  <SiTicktick className={styles.tic} /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
