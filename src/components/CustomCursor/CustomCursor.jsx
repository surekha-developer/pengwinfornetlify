

"use client";

import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.scss";

export default function CustomCursor() {
  const followerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let x = 0;
    let y = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      x += (mouseX - x) * 0.12;
      y += (mouseY - y) * 0.12;
      follower.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    };

    // 🔥 DYNAMIC HOVER DETECTION
    const handleMouseOver = (e) => {
      if (
        e.target.closest(
          "a, button, .cursor-hover"
        )
      ) {
        follower.classList.add(styles.hover);
      }
    };

    const handleMouseOut = () => {
      follower.classList.remove(styles.hover);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div ref={followerRef} className={styles.follower} />;
}
