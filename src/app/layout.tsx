import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | LUMIÈRE",
    default: "LUMIÈRE | Ресторан высокой кухни",
  },
  description:
    "LUMIÈRE — это искусство гастрономии в центре Москвы. Авторская кухня, уникальная винная карта и атмосфера роскоши.",
  keywords: [
    "ресторан",
    "высокая кухня",
    "fine dining",
    "москва",
    "авторская кухня",
    "вино",
  ],
  authors: [{ name: "LUMIÈRE Team" }],
  openGraph: {
    title: "LUMIÈRE | Ресторан высокой кухни",
    description:
      "Погрузитесь в атмосферу изысканности и вкуса. Авторское меню от шеф-повара Александра Воронова.",
    url: "https://lumiere-restaurant.ru",
    siteName: "LUMIÈRE",
    images: [
      {
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Интерьер ресторана LUMIÈRE",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMIÈRE | Ресторан высокой кухни",
    description:
      "Искусство гастрономии в центре Москвы. Забронируйте стол сегодня.",
    images: [
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${lato.variable}`}>
      <body className="antialiased bg-background text-foreground">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
