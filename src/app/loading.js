// import Loader from "@/components/Loader";
// import styles from "../styles/loader.module.scss";

// export default function Loading() {
//   return (
//     <div className={styles.loaderWrapper}>
//       <div className={styles.loader}></div>
//     </div>
//   );
// }

//............

"use client";

import styles from "@/styles/loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}></div>
    </div>
  );
}

