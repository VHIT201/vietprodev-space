import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VietProDev FocusSpace | Không gian tập trung cho lập trình viên",
  description:
    "Không gian ảo yên tĩnh, giúp bạn loại bỏ xao nhãng, tập trung làm việc và hoàn thành mục tiêu cá nhân.",
  keywords: [
    "focus",
    "productivity",
    "workspace",
    "tập trung",
    "lập trình viên",
    "vietprodev",
    "no distraction",
    "pomodoro",
    "deep work",
  ],
  authors: [{ name: "VietProDev", url: "https://vietpro.dev" }],
  creator: "VietProDev",
  openGraph: {
    title: "VietProDev FocusSpace | Không gian tập trung cho lập trình viên",
    description:
      "Không gian ảo yên tĩnh, giúp bạn loại bỏ xao nhãng, tập trung làm việc và hoàn thành mục tiêu cá nhân.",
    // url: "https://focusspace.vietpro.dev",
    siteName: "VietProDev FocusSpace",
    images: [
      {
        url: "/vercel.svg",
        width: 1200,
        height: 630,
        alt: "VietProDev FocusSpace",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VietProDev FocusSpace | Không gian tập trung cho lập trình viên",
    description:
      "Không gian ảo yên tĩnh, giúp bạn loại bỏ xao nhãng, tập trung làm việc và hoàn thành mục tiêu cá nhân.",
    images: ["/vercel.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
