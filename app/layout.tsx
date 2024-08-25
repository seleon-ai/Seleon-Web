import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              const darkMode = localStorage.getItem('darkMode');
              if (darkMode === 'true') {
                document.documentElement.classList.add('dark');
              }
            })();
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
