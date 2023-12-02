import { Gabarito, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "Website Pemula",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-black`} suppressContentEditableWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
