"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main style={styles.container}>
      
      <div style={styles.card}>
        
        <h1 style={styles.errorCode}>404</h1>

        <h2 style={styles.title}>Page Not Found</h2>

        <p style={styles.description}>
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <div style={styles.buttonGroup}>
          
          <Link href="/" style={styles.homeBtn}>
            Go Back Home
          </Link>

          <Link href="/contact" style={styles.contactBtn}>
            Contact Us
          </Link>

        </div>

      </div>

    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f8fafc",
    padding: "20px",
  },

  card: {
    textAlign: "center",
    maxWidth: "500px",
  },

  errorCode: {
    fontSize: "40px",
    fontWeight: "700",
    color: "#0e2a5c",
    marginBottom: "10px",
  },

  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },

  description: {
    color: "#64748b",
    marginBottom: "30px",
    lineHeight: "1.6",
  },

  buttonGroup: {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  homeBtn: {
    padding: "12px 24px",
    backgroundColor: "#0e2a5c",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500",
  },

  contactBtn: {
    padding: "12px 24px",
    backgroundColor: "#e2e8f0",
    color: "#0f172a",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "500",
  },
};