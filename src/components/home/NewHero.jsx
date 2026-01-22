

"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/homeStyles/NewHero.module.scss";
import { useState, useEffect } from "react";

export default function NewHeroSection() {
  const headingText = "A Trusted\nPartner in Innovation";
  const [typedHeading, setTypedHeading] = useState("");

  useEffect(() => {
    let i = 0;
    const typeHeading = () => {
      if (i <= headingText.length) {
        setTypedHeading(headingText.slice(0, i).replace(/\n/g, "<br/>"));
        i++;
        setTimeout(typeHeading, 100);
      }
    };
    typeHeading();
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background */}
      <Image
        src="/imageswebp/AiHomeImg.webp"
        alt="AI Technology"
        fill
        priority
        className={styles.bg}
      />
      <div className={styles.overlay}></div>

      <div className={styles.divider}></div>

      {/* Hero Content */}
      <div className="appContainer">
      <div className={styles.content}>
        <h1
          className={styles.heading}
          dangerouslySetInnerHTML={{ __html: typedHeading }}
        ></h1>
        <p>
          Turning ideas into impactful digital solutions for a smarter future.
        </p>
        <Link href="/services" className={styles.secondaryBtn}>
          Explore Our Services
        </Link>
      </div>
      </div>

      {/* Floating Cards */}
      <div className={styles.cardsWrapper}>
        <div className={styles.cards}>
          <div
            className={styles.card}
            style={{ backgroundImage: "url('/modern-apps.jpg')" }}
            onClick={() =>
              window.location.href = "/services/digital-transformation"
            }
          >
            <h3>Digital Transformation</h3>
            <p>
              Empowering businesses to evolve in the digital era by leveraging
              cutting-edge technologies. We streamline processes, improve
              operational efficiency, and enable data-driven decision-making for
              sustainable growth.
            </p>
          </div>

          <div
            className={styles.card}
            style={{ backgroundImage: "url('/modern-apps.jpg')" }}
            onClick={() => window.location.href = "/services/modern-apps"}
          >
            <h3>Modern Apps</h3>
            <p>
              Designing and developing scalable, intuitive, and secure
              applications for web and mobile. Our solutions focus on seamless
              user experiences, fast performance, and adaptability to meet the
              dynamic demands of today’s market.
            </p>
          </div>

          <div
            className={styles.card}
            style={{ backgroundImage: "url('/product-engineering.jpg')" }}
            onClick={() => window.location.href = "/services/product-engineering"}
          >
            <h3>Product Engineering</h3>
            <p>
              Turning ideas into market-ready products through end-to-end
              engineering. From concept and prototyping to development,
              testing, and deployment, we ensure high-quality, innovative, and
              reliable products that delight users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
