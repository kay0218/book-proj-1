import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Your Year Book",
  description: "The birth year book app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" strategy="afterInteractive" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
