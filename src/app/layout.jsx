import "./globals.css";

import Navbar from "../components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="bg-slate-900">
      <body className="antialiased">
        <div className="flex flex-col h-screen">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
