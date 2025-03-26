import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: {
    default: 'Portfolio - Eduardo Lima',
    template: ''
  },
  description: 'Desenvolvedor Fullstack especializado em React, Next.js, TypeScript e Node.js. Criação de interfaces modernas e sistemas web eficientes.',
  keywords: ['desenvolvedor', 'frontend', 'backend', 'fullstack', 'react', 'next.js', 'typescript', 'node.js', 'portfolio'],
  authors: [{ name: 'Eduardo Lima' }],
  creator: 'Eduardo Lima',
  publisher: 'Eduardo Lima',
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://eduardolima.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Eduardo Lima | Desenvolvedor Fullstack',
    description: 'Desenvolvedor Fullstack especializado em React, Next.js, TypeScript e Node.js. Criação de interfaces modernas e sistemas web eficientes.',
    url: 'https://eduardolima.vercel.app',
    siteName: 'Portfolio de Eduardo Lima',
    locale: 'pt_BR',
    type: 'website',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable}  antialiased`}>{children}</body>
    </html>
  );
}
