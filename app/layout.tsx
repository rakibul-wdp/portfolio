import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rakibul-wdp",
  description: "My (Md. Rakibul Islam) Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <Navbar />
          <main className="w-[90%] md:w-[80%] lg:w-[70%] min-[1050px]:w-[68%] min-[1100px]:w-[65%] min-[1150px]:w-[63%] min-[1200px]:w-[61%] xl:w-[56%] mx-auto">
            {children}
          </main>
        </Container>
      </body>
    </html>
  );
}
