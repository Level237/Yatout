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
  title: 'YatouApp | Résidences, Hôtels & Restauration au Cameroun',
  icons: {
    icon: '/logo.png',
  },
  description: 'La plateforme de référence pour réserver vos séjours et vos tables. Trouvez les meilleures résidences meublées et hôtels en un clic.',
  keywords: ['Yatou', 'Réservation ', 'Hôtel', 'Résidence meublée', 'Restauration', 'Cote d Ivoire', 'Cote d Ivoire', 'Cote d Ivoire', 'Cote d Ivoire', 'Cote d Ivoire'],
  authors: [{ name: 'Yatou Team' }],
  openGraph: {
    title: 'YatouApp - Votre confort, notre priorité',
    description: "Réservez des résidences, hôtels et restaurants partout en cote d'ivoire",
    url: 'https://www.yatouapp.com',
    siteName: 'YatouApp',
    images: [
      {
        url: '/onboarding.png', // Image qui s'affiche lors d'un partage WhatsApp/Facebook
        width: 1200,
        height: 630,
        alt: 'Aperçu de YatouApp',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YatouApp | Services de proximité',
    description: 'Le meilleur de l hôtellerie et de la restauration',
    images: ['/onboarding.png'],
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
