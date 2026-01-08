// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import styles from "../../styles/serviceStyles/NewAllCardServices.module.scss";

// const services = [
//   {
//     id: 1,
//     image: "/digi.jpg",
//     title: "Digital Transformation",
//     desc:
//       "We help businesses modernize processes and deliver seamless, innovative digital experiences",
//     link: "/services/digital-transformation",
//   },
//   {
//     id: 2,
//     image: "/digit3.jpg",
//     title: "Middleware Integrations",
//     desc:
//       "We help businesses seamlessly connect multiple software systems for smooth operations",
//     link: "/services/middleware-integrations",
//   },
//   {
//     id: 3,
//     image: "/digi2.jpg",
//     title: "Software Consulting",
//     desc:
//       "We analyze your current IT infrastructure to identify gaps, optimize systems, and unlock growth opportunities",
//     link: "/services/software-consulting",
//   },
//   {
//     id: 4,
//     image: "/cloudimg.jpg",
//     title: "Cloud Services",
//     desc:
//       "We help businesses leverage secure, scalable cloud solutions to improve performance, reduce costs, and enable faster innovation",
//     link: "/services/cloud-services",
//   },
//   {
//     id: 5,
//     image: "/staffimg.jpg",
//     title: "Staff Augmentation",
//     desc:
//       "We provide skilled professionals to seamlessly extend your team and accelerate project delivery with the right expertise",
//     link: "/services/staff-augmentation",
//   },
//   {
//     id: 6,
//     image: "/IotImage.jpg",
//     title: "IoT Solutions",
//     desc:
//       "We design and implement smart IoT solutions that connect devices, collect real-time data, and drive intelligent business decisions",
//     link: "/services/iot-solutions",
//   },
//   {
//     id: 7,
//     image: "/Nocodeimg.jpg",
//     title: "No Code / Low Code",
//     desc:
//       "We empower businesses to build applications faster with no-code and low-code platforms, reducing development time and operational costs",
//     link: "/services/no-code-low-code",
//   },
// ];

// export default function NewAllCardServices() {
//   return (
//     <section className={styles.servicesSection}>
//       <div className={styles.container}>
//         {/* Heading */}
//         <div className={styles.heading}>
//           <span className={styles.subTitle}>ALL SERVICES</span>
//           <h2>Accelerate your digital growth with us</h2>
//         </div>

//         {/* Cards */}
//         <div className={styles.grid}>
//           {services.map((service) => (
//             <div key={service.id} className={styles.card}>
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className={styles.image}
//                 />
//               </div>

//               <div className={styles.content}>
//                 <h3>{service.title}</h3>
//                 <p>{service.desc}</p>

//                 <Link href={service.link} className={styles.btn}>
//                   Know More →
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
        


// <div className={styles.closingLine}>
//       <p>Ready to transform your business? Let’s build the future together.</p>
//       <Link href="/contact">
//         <button>Talk to Our Experts</button>
//       </Link>
//     </div>

//       </div>
     
//     </section>
//   );
// }
//......................

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import styles from "../../styles/serviceStyles/NewAllCardServices.module.scss";

// const services = [
//   {
//     id: 1,
//     image: "/digi.jpg",
//     title: "Digital Transformation",
//     desc:
//       "We help businesses modernize processes and deliver seamless, innovative digital experiences",
//     link: "/services/digital-transformation",
//   },
//   {
//     id: 2,
//     image: "/digit3.jpg",
//     title: "Middleware Integrations",
//     desc:
//       "We help businesses seamlessly connect multiple software systems for smooth operations",
//     link: "/services/middleware-integrations",
//   },
//   {
//     id: 3,
//     image: "/digi2.jpg",
//     title: "Software Consulting",
//     desc:
//       "We analyze your current IT infrastructure to identify gaps, optimize systems, and unlock growth opportunities",
//     link: "/services/software-consulting",
//   },
//   {
//     id: 4,
//     image: "/cloudimg.jpg",
//     title: "Cloud Services",
//     desc:
//       "We help businesses leverage secure, scalable cloud solutions to improve performance, reduce costs, and enable faster innovation",
//     link: "/services/cloud-services",
//   },
//   {
//     id: 5,
//     image: "/staffimg.jpg",
//     title: "Staff Augmentation",
//     desc:
//       "We provide skilled professionals to seamlessly extend your team and accelerate project delivery with the right expertise",
//     link: "/services/staff-augmentation",
//   },
//   {
//     id: 6,
//     image: "/IotImage.jpg",
//     title: "IoT Solutions",
//     desc:
//       "We design and implement smart IoT solutions that connect devices, collect real-time data, and drive intelligent business decisions",
//     link: "/services/iot-solutions",
//   },
//   {
//     id: 7,
//     image: "/Nocodeimg.jpg",
//     title: "No Code / Low Code",
//     desc:
//       "We empower businesses to build applications faster with no-code and low-code platforms, reducing development time and operational costs",
//     link: "/services/no-code-low-code",
//   },
// ];

// export default function NewAllCardServices() {
//   return (
//     <section className={styles.servicesSection}>
//       <div className={styles.container}>
//         {/* Heading */}
//         <div className={styles.heading}>
//           <span className={styles.subTitle}>ALL SERVICES</span>
//           <h2>Accelerate your digital growth with us</h2>
//         </div>

//         {/* Cards */}
//         <div className={styles.grid}>
//           {services.map((service) => (
//             <div key={service.id} className={styles.card}>
//               <div className={styles.imageWrapper}>
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className={styles.image}
//                 />
//               </div>

//               <div className={styles.content}>
//                 <h3>{service.title}</h3>
//                 <p>{service.desc}</p>

//                 <Link href={service.link} className={styles.btn}>
//                   Know More →
//                 </Link>
//               </div>
//             </div>
//           ))}
// {/* Image occupying remaining space */}
// <div className={styles.gridImage}>
//   <Image
//     src="/robohead.jpeg"  // your image
//     alt="Services Illustration"
//     fill
//   />
// </div>


//         </div>
        


// <div className={styles.closingLine}>
//       <p>Ready to transform your business? Let’s build the future together.</p>
//       <Link href="/contact">
//         <button>Talk to Our Experts</button>
//       </Link>
//     </div>

//       </div>
     
//     </section>
//   );
// }
//.................

"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/serviceStyles/NewAllCardServices.module.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

const services = [
  {
    id: 1,
    image: "/digi.jpg",
    title: "Digital Transformation",
    desc:
      "We help businesses modernize processes and deliver seamless, innovative digital experiences",
    link: "/services/digital-transformation",
  },
  {
    id: 2,
    image: "/digit3.jpg",
    title: "Middleware Integrations",
    desc:
      "We help businesses seamlessly connect multiple software systems for smooth operations",
    link: "/services/middleware-integrations",
  },
  {
    id: 3,
    image: "/digi2.jpg",
    title: "Software Consulting",
    desc:
      "We analyze your current IT infrastructure to identify gaps, optimize systems, and unlock growth opportunities",
    link: "/services/software-consulting",
  },
  {
    id: 4,
    image: "/cloudimg.jpg",
    title: "Cloud Services",
    desc:
      "We help businesses leverage secure, scalable cloud solutions to improve performance, reduce costs, and enable faster innovation",
    link: "/services/cloud-services",
  },
  {
    id: 5,
    image: "/staffimg.jpg",
    title: "Staff Augmentation",
    desc:
      "We provide skilled professionals to seamlessly extend your team and accelerate project delivery with the right expertise",
    link: "/services/staff-augmentation",
  },
  {
    id: 6,
    image: "/IotImage.jpg",
    title: "IoT Solutions",
    desc:
      "We design and implement smart IoT solutions that connect devices, collect real-time data, and drive intelligent business decisions",
    link: "/services/iot-solutions",
  },
  {
    id: 7,
    image: "/Nocodeimg.jpg",
    title: "No Code / Low Code",
    desc:
      "We empower businesses to build applications faster with no-code and low-code platforms, reducing development time and operational costs",
    link: "/services/no-code-low-code",
  },
];

export default function NewAllCardServices() {
  return (
    <>
     {/* <section>
          <SectionHeader
            heading="Our Services"
            text="At Pengwin Tech Solutions, we deliver innovative and reliable solutions that empower businesses to grow."
          />
          
        </section> */}
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Heading */}
        <div className={styles.heading}>
          <span className={styles.subTitle}>ALL SERVICES</span>
          <h2>Accelerate your digital growth with us</h2>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <Link href={service.link} className={styles.btn}>
                  Know More →
                </Link>
              </div>
            </div>
          ))}
{/* Image occupying remaining space */}
<div className={styles.gridImage}>
  <Image
    src="/robohead.jpeg"  // your image
    alt="Services Illustration"
    fill
    style={{ objectFit: "cover" }}
  />
   <div className={styles.overlayText}>
    Connect with us?
    <br />
    <Link href="/contact">
    <button className={styles.overlayBtn}>Talk to Experts</button>
    </Link>
  </div>
</div>


        </div>
        


<div className={styles.closingLine}>
      <p>Ready to transform your business? Let’s build the future together.</p>
      <Link href="/contact">
        <button>Talk to Our Experts</button>
      </Link>
     
    </div>

      </div>
     
    </section>
    </>
  );
}
