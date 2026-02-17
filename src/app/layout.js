

export const metadata = {
  title: {
    default: "Pengwin Tech Solutions",
    template: "%s | Pengwin Technologies",
  },
  description: "Driven by Passion. Powered with Vision.",
};

import { Poppins } from "next/font/google";
import "./globals.scss";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
