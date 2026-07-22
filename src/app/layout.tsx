import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto_Condensed, Outfit, Geist } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BrosDev | Next-Gen IT Company & Digital Product Engineering",
  description:
    "Designing seamless & intuitive digital experiences that engage users and simplify complex tasks effortlessly. Custom Web Apps, Mobile Apps & Enterprise AI.",
  icons: {
    icon: "/logo.svg",
  },
  keywords: [
    "BrosDev",
    "IT Company",
    "Software Agency",
    "Next.js Development",
    "Mobile Apps",
    "Enterprise AI",
    "UI UX Design Studio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${robotoCondensed.variable} ${outfit.variable} ${geist.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#A90706] selection:text-white">
        {children}
      </body>
    </html>
  );
}
