import "./globals.css";

export const metadata = {
  title: "book-proj-1",
  description: "The birth year book app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
