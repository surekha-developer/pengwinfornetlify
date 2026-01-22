

"use client";

import { useState } from "react";
import styles from "../../styles/contactStyles/GetInTouch.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

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
    <>
     <section>
          <SectionHeader
            heading="Contact Us"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          {/* Your content goes here */}
        </section>    <section className={styles.contactSection}>
      {/* Left Side Image */}
      <div className={styles.left}>
        <img src="/imageswebp/getintouchimage.webp" alt="Contact Us" />
      </div>

      {/* Right Side Form */}
      <div className={styles.right}>
          <h2 className={styles.typing}>Get in Touch</h2>

  <p className={styles.subText}>
    Have a question or a project in mind? Fill out the form and our team will get
    back to you shortly.
  </p>
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
    </>
  );
}
//................




// "use client";

// import { useState } from "react";
// import styles from "../../styles/contactStyles/GetInTouch.module.scss";
// import SectionHeader from "../SectionHeader/SectionHeader";

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
//         body: JSON.stringify({
//           access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
//           name: data.name,
//           email: data.email,
//           phone: data.phone,
//           whatsapp: data.whatsapp,
//           message: data.message,
//           subject: "New Contact Form – Pengwin Tech Solutions",
//         }),
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
//     <>
//      <section>
//           <SectionHeader
//             heading="Contact Us"
//             text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
//           />
//           {/* Your content goes here */}
//         </section>    <section className={styles.contactSection}>
//       {/* Left Side Image */}
//       {/* <div className={styles.left}>
//         <img src="/getintouchimage.jpeg" alt="Contact Us" />
//       </div> */}

// <div className={styles.left}>
//   <div className={styles.imageStack}>

//     {/* MAIN IMAGE */}
//     <img
//       src="/getinTouchHome.jpg"
//       alt="Get in Touch"
//       className={styles.mainImage}
//     />

//     {/* EXPERIENCE BADGE */}
//     <div className={styles.experienceBadge}>
//       <span className={styles.years}>1+</span>
//       <span className={styles.text}>
//         Years of <br /> Experience
//       </span>
//     </div>

//     {/* OVERLAPPING IMAGE */}
//     <img
//       src="/Story.jpg"
//       alt="Our Story"
//       className={styles.overlayImage}
//     />

//     {/* SMART IT CARD */}
//     <div className={styles.smartCard}>
//       <p>Smart IT Solutions</p>
//       <small>With AI</small>
//     </div>

//   </div>
// </div>


//       {/* Right Side Form */}
//       <div className={styles.right}>
//           <h2 className={styles.typing}>Get in Touch</h2>

//   <p className={styles.subText}>
//     Have a question or a project in mind? Fill out the form and our team will get
//     back to you shortly.
//   </p>
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
//             <input name="phone" placeholder="Phone Number" inputMode="numeric" />
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
//     </>
//   );
// }


//................


// "use client";

// import { useState } from "react";
// // import styles from "../../../styles/contactStyles/GetInTouch.module.scss";
// import styles from "../../styles/contactStyles/GetInTouch.module.scss";
// import SectionHeader from "../SectionHeader/SectionHeader";

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
//         body: JSON.stringify({
//           access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
//           name: data.name,
//           email: data.email,
//           phone: data.phone,
//           whatsapp: data.whatsapp,
//           message: data.message,
//           subject: "New Contact Form – Pengwin Tech Solutions",
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus("Message sent successfully ✅");
//         form.reset();
//       } else {
//         setStatus("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setStatus("Server error. Please try later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <section>
//         <SectionHeader
//           heading="Contact Us"
//           text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
//         />
//       </section>

//       <section className={styles.contactSection}>

//         {/* LEFT – IMAGE STACK */}
//         <div className={styles.left}>
//           <div className={styles.imageStack}>

//             <img
//               src="/getInTouch.jpg"
//               alt="Get in Touch"
//               className={styles.mainImage}
//             />

//             <div className={styles.experienceBadge}>
//               <span className={styles.years}>1+</span>
//               <span className={styles.text}>
//                 Years of <br /> Experience
//               </span>
//             </div>

//             <img
//               src="/Story.jpg"
//               alt="Story"
//               className={styles.overlayImage}
//             />

//             <div className={styles.smartCard}>
//               <p>Smart IT Solutions</p>
//               <small>With AI</small>
//             </div>

//           </div>
//         </div>

//         {/* RIGHT – FORM */}
//         <div className={styles.right}>
//           <h2 className={styles.typing}>Get in Touch</h2>

//           <p className={styles.subText}>
//             Have a question or a project in mind? Fill out the form and our team
//             will get back to you shortly.
//           </p>

//           <form className={styles.contactForm} onSubmit={handleSubmit}>
//             <div className={styles.field}>
//               <input name="name" placeholder="Your Full Name" required />
//             </div>

//             <div className={styles.field}>
//               <input
//                 name="email"
//                 type="email"
//                 placeholder="Your Email Address"
//                 required
//               />
//             </div>

//             <div className={styles.field}>
//               <input name="phone" placeholder="Phone Number" />
//             </div>

//             <div className={styles.field}>
//               <input name="whatsapp" placeholder="WhatsApp Number" />
//             </div>

//             <div className={styles.field}>
//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Tell us about your requirement"
//                 required
//               ></textarea>
//             </div>

//             {/* <button type="submit" disabled={loading}>
//               {loading ? "Sending..." : "Send Message"}
//             </button> */}
//             <button className={styles.submitButton} type="submit" disabled={loading}>
//   {loading ? "Sending..." : "Send Message"}
// </button>


//             {status && <p className={styles.status}>{status}</p>}
//           </form>
//         </div>

//       </section>
//     </>
//   );
// }
