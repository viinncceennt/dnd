import { Uncial_Antiqua, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";

const uncialAntiqua = Uncial_Antiqua({
  subsets: ["latin"],
  weight: ["400"],
  preload: true,
});
const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata = {
  title: "Terre d'Hormer",
  description: "Etienne vous invite à rejoindre les Terre d'Hormer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="forest">
      <body className={`antialiased ${uncialAntiqua.className}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
