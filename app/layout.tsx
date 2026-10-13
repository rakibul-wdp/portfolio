import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

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
      <body suppressHydrationWarning>
        <Container>
          <Navbar />
          <main className="w-[90%] max-w-[750px] mx-auto">{children}</main>
        </Container>
        <div className="min-[750px]:hidden bg-gradient-to-r from-purple-600 to-blue-500 text-white border border-purple-500 shadow-2xl rounded-xl p-4 inline-block fixed bottom-60 ml-2 right-5 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <p className="bg-transparent">
            This website isn&apos;t fully responsive 😢 <br /> Please ensure your
            screen size is at least{" "}
            <span className="font-bold bg-transparent text-yellow-300">
              750px
            </span>{" "}
            wide 😊
          </p>
        </div>
      </body>
    </html>
  );
}

/*
font-family from boot dev
font-family: Arcuata,serif;

font-family from one of developer
font-family: "JetBrains Mono", monospace;
*/
