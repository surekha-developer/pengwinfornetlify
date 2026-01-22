

"use client";

import Image from "next/image";
import styles from "../../styles/homeStyles/NewServicesTimeLine.module.scss";
import { FaRegComments, FaTag } from "react-icons/fa";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    image: "/imageswebp/digi.webp",
    date: "Digital Transformation",
    title:
      "We help businesses modernize processes and deliver seamless, innovative digital experiences",
  },
  {
    id: 2,
    image: "/imageswebp/digit3.webp",
    date: "MiddleWare Integrations",
    title:
      "We help businesses seamlessly connect multiple software systems for smooth operations",
  },
  {
    id: 3,
    image: "/imageswebp/digi2.webp",
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
