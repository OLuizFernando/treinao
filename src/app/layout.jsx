import "./globals.css";

import Navbar from "../components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-900">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
