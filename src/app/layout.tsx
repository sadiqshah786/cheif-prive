import { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Chef Prive",
  description: "Task of O16 labs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <>
        <body>
          <Header />
          <div>{children}</div>
          <Footer />
        </body>
      </>
    </html>
  );
}
