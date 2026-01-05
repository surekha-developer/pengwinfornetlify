
// "use client";

// import { useState } from "react";
// import styles from "../../styles/contactStyles/GetInTouch.module.scss";

// export default function GetInTouch() {
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus("");

//     const form = e.target;
//     const data = Object.fromEntries(new FormData(form).entries());

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },

// body: JSON.stringify({
//   access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
//   name: data.name,
//   email: data.email,
//   phone: data.phone,
//   whatsapp: data.whatsapp,
//   message: data.message,
//   subject: "New Contact Form – Pengwin Tech Solutions",


 
// })

//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus("Message sent successfully ✅");
//         form.reset();
//       } else {
//         setStatus("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus("Server error. Please try later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className={styles.contactSection}>
//       {/* Left Side Image / Lottie */}
//       <div className={styles.left}>
//         <img src="/getInTouch.jpg" alt="Contact Us" />
//       </div>

//       {/* Right Side Form */}
//       <div className={styles.right}>
//         <h2>Get in Touch</h2>
       

//         <form className={styles.contactForm} onSubmit={handleSubmit}>
//           <div className={styles.field}>
//             <input name="name" placeholder="Your Full Name" required />
            
//           </div>

//           <div className={styles.field}>
//             <input
//               name="email"
//               type="email"
//               placeholder="Your Email Address"
//               required
//             />
            
//           </div>

//           <div className={styles.field}>
//             <input
//               name="phone"
//               placeholder="Phone Number"
//               inputMode="numeric"
//             />
           
//           </div>

//           <div className={styles.field}>
//             <input
//               name="whatsapp"
//               placeholder="WhatsApp Number"
//               inputMode="numeric"
//             />
            
//           </div>

//           <div className={styles.field}>
//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Tell us about your requirement"
//               required
//             ></textarea>
           
//           </div>

//           <button type="submit" disabled={loading}>
//             {loading ? "Sending..." : "Send Message"}
//           </button>

//           {status && <p className={styles.status}>{status}</p>}
//         </form>
//       </div>
//     </section>
//   );
// }
//..............

"use client";

import { useState } from "react";
import styles from "../../styles/contactStyles/GetInTouch.module.scss";

export default function GetInTouch() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: data.name,
          email: data.email,
          phone: data.phone,
          whatsapp: data.whatsapp,
          message: data.message,
          subject: "New Contact Form – Pengwin Tech Solutions",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully ✅");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error. Please try later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      {/* Left Side Image */}
      <div className={styles.left}>
        <img src="/getintouchimage.jpeg" alt="Contact Us" />
      </div>

      {/* Right Side Form */}
      <div className={styles.right}>
        <h2>Get in Touch</h2>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <input name="name" placeholder="Your Full Name" required />
          </div>

          <div className={styles.field}>
            <input
              name="email"
              type="email"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div className={styles.field}>
            <input name="phone" placeholder="Phone Number" inputMode="numeric" />
          </div>

          <div className={styles.field}>
            <input
              name="whatsapp"
              placeholder="WhatsApp Number"
              inputMode="numeric"
            />
          </div>

          <div className={styles.field}>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your requirement"
              required
            ></textarea>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </section>
  );
}
