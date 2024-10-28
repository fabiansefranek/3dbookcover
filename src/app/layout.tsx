import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3dbookcover.com",
  description: "Generate 3D book covers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
