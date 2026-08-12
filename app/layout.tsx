import "./globals.css";

export const metadata = {
  title: "DHIRA | Since 2010",
  description: "Tradition You Can Taste. Quality You Can Trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
