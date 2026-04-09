"use client";

import Image from "next/image";
import styles from "../../styles/homeStyles/OurClients.module.scss";

import headingImg from "../../../public/ourclientswebpimages/ourclientsheadingremovebg.webp";
import c1 from "../../../public/ourclientswebp/office24-7_1.webp";
import c2 from "../../../public/ourclientswebp/kosmo_2.webp";
import c3 from "../../../public/ourclientswebp/RBC24_3.webp";
import c4 from "../../../public/ourclientswebp/benchXchange_4.webp";
import c5 from "../../../public/ourclientswebp/sliceflo_5.webp";
import c6 from "../../../public/ourclientswebp/magni5_6.webp";
import c7 from "../../../public/ourclientswebp/yogaland_7.webp"
import c8 from "../../../public/ourclientswebp/jk_8.webp";
import c9 from "../../../public/ourclientswebp/Affidi_9.webp";
import c10 from "../../../public/ourclientswebp/innovarsity_10.webp";
import c11 from "../../../public/ourclientswebp/Ramadeus_11.webp";

export default function OurClients() {
  const clients = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11];

  // Duplicate the array for a seamless infinite loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className={styles.clientsSection}>
      <div className="appContainer">
        <div className={styles.headingWrapper}>
          <Image
            src={headingImg}
            alt="Our Clients"
            className={styles.headingImg}
            width={320}
            height={120}
          />
        </div>

        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {duplicatedClients.map((img, idx) => (
              <div
                key={idx}
                className={styles.clientBox}
              >
                <Image
                  src={img}
                  alt={`Client ${idx + 1}`}
                  width={200}
                  height={120}
                  priority={idx < 10} // Load initial logos faster
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}
