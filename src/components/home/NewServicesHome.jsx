'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../../styles/homeStyles/NewServicesHome.module.scss';

const services = [
  {
    title: 'Digital Transformation',
    image: '/robohand2.jpg',
    description: 'Healthy and delicious meal solutions.',
  },
  {
    title: 'Digital Transformation',
    image: '/robohand2.jpg',
    description: 'Smart digital solutions for modern teams.',
  },
  {
    title: 'Digital Transformation',
    image: '/robohand2.jpg',
    description:
      'Talexy is a talent acquisition platform that leverages AI to make the hiring process better and faster.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 120,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function NewServicesHome() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Services</h2>

      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={styles.card}
            variants={cardVariants}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className={styles.image}
              />

              {/* Hover Overlay */}
              <div className={styles.overlay}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
