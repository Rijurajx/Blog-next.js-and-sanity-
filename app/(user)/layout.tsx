import Header from "@/components/Header";
import "../globals.css";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ikigai",
  description: "stay healthy mentally",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-7xl mx-auto">
        <Header />
        <Banner />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
