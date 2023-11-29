import "./globals.css";

export const metadata = {
  title: "React Event listeners",
  description: "Created by me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
