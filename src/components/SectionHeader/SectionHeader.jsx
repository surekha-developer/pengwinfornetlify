


"use client";

import { useEffect, useState } from "react";
import styles from "./SectionHeader.module.scss";

export default function SectionHeader({ heading, text }) {
  const [typedHeading, setTypedHeading] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < heading.length) {
      const timeout = setTimeout(() => {
        setTypedHeading((prev) => prev + heading[index]);
        setIndex(index + 1);
      }, 80); // typing speed (ms)

      return () => clearTimeout(timeout);
    }
  }, [index, heading]);

  return (
    <div className={styles.sectionHeader}>
      <h2>
        {typedHeading}
        <span className={styles.cursor}>|</span>
      </h2>
      <p>{text}</p>
    </div>
  );
}

