import "./globals.css";
import { Satisfy } from "next/font/google"


const font = Satisfy({
  weight:"400",
  subsets:["latin"],
});

export const metadata = {
  title: "RnDVerse",
  description: "Open, Collaborative, and Decentralized Economy for Scientific Research",
  icons: {
    icon: '/RnDVerse_logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
