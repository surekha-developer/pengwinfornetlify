


"use client";

import { useEffect } from "react";
import styles from "@/styles/aboutStyles/ThreeCardsVMV.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { SiTicktick } from "react-icons/si";




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

export default function VisionMissionValues() {
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
