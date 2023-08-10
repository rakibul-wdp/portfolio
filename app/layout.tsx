import About from "@/components/About";
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
          <main className="flex lg:gap-14">
            <div className="basis-1/3 hidden lg:block">
              <About />
            </div>
            <div className="basis-2/3">{children}</div>
          </main>
        </Container>
      </body>
    </html>
  );
}
