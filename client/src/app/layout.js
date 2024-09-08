import { Livvic } from "next/font/google";
import "./globals.css";

const livvic = Livvic({ subsets: ["latin"] , weight: '400'});

export const metadata = {
  title: "_base.io_",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={livvic.className}>{children}</body>
    </html>
  );
}
