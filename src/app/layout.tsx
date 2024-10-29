// app/layout.tsx (for App Router in Next.js 13)
import Header from "@/components/header/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Your App",
  description: "A description of your app",
};

// Add typing for the 'children' prop
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={`${poppins.className}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
