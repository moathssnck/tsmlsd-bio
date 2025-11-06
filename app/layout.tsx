import type { Metadata } from "next";
import Script from "next/script"

import "./globals.css";



export const metadata: Metadata = {
  title: "Bio Links App",
  description: "Bio Links app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-XXX" strategy="afterInteractive" />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-XXX');
          `}
        </Script>
      </head>
      <body
      >
        {children}
      </body>
    </html>
  );
}