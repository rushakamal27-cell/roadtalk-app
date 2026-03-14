import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SafeHaul — Safety English for Truck Drivers",
  description: "AI-powered safety compliance platform for professional truck drivers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="format-detection" content="telephone=no" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&family=Exo+2:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
        <script src="https://telegram.org/js/telegram-web-app.js" />
      </head>
      <body className="bg-bg-deep text-white font-ui overscroll-none">
        {children}
      </body>
    </html>
  );
}

