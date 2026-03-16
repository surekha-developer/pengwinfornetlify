

// "use client";
// import styles from "@/styles/contactStyles/GoogleMap.module.scss";
// import { FaMapLocationDot } from "react-icons/fa6";

// export default function GoogleMap() {
//   return (
//     <section className={styles.mapSection}>
//       <div className={styles.container}>

//         {/* Heading with Icon */}
//         <div className={styles.headingWrapper}>
//           <h2 className={styles.heading}>Our Location</h2>
//           <FaMapLocationDot className={styles.headingIcon} />
//         </div>

//         <div className={styles.mapWrapper}>
//           <iframe
//             src="https://www.google.com/maps?q=PengWIN+Tech+Solutions,+Chandrika+Vilasini+Apartments,+Rajamahendravaram,+Patha+Tungapadu,+Andhra+Pradesh+533107&output=embed"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             allowFullScreen
//           ></iframe>
//         </div>

//         <div className={styles.actions}>
//           <a
//             href="https://www.google.com/maps/dir/?api=1&destination=PengWIN+Tech+Solutions,+Chandrika+Vilasini+Apartments,+Rajamahendravaram,+Patha+Tungapadu,+Andhra+Pradesh+533107"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.directionsBtn}
//           >
//             Directions
//           </a>

//           <a
//             href="https://www.google.com/maps/search/?api=1&query=PengWIN+Tech+Solutions,+Chandrika+Vilasini+Apartments,+Rajamahendravaram,+Patha+Tungapadu,+Andhra+Pradesh+533107"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.viewMapBtn}
//           >
//             View larger map
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// }
//...............

"use client";
import styles from "@/styles/contactStyles/GoogleMap.module.scss";
import { FaMapLocationDot } from "react-icons/fa6";

export default function GoogleMap() {
  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>

        {/* Heading with Icon */}
        <div className={styles.headingWrapper}>
          <h2 className={styles.heading}>Our Location</h2>
          <FaMapLocationDot className={styles.headingIcon} />
        </div>

        <div className={styles.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61044.50279060231!2d81.788928!3d17.0098605!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3de90f7dd91%3A0x8f279a555120f419!2sSBI%20Branch%20Lalacheruvu!5e0!3m2!1sen!2sin!4v1773637311357!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

        <div className={styles.actions}>
          <a
            href="https://maps.app.goo.gl/1i4xrJRQv3LbFfgH9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsBtn}
          >
            Directions
          </a>

          <a
            href="https://maps.app.goo.gl/1i4xrJRQv3LbFfgH9"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewMapBtn}
          >
            View larger map
          </a>
        </div>

      </div>
    </section>
  );
}