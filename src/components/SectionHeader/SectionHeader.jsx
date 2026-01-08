"use client";

import React from "react";
import styles from "./SectionHeader.module.scss"; // SCSS module

export default function SectionHeader({ heading, text }) {
  return (
    <div className={styles.sectionHeader}>
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
}
