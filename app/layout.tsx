import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seleon",
  description: "Innovación y Eficiencia en la Gestión de Recursos Públicos con IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/only-logo-light.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
