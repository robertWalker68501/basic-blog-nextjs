import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Basic Blog",
  description: "Basic blog created using Next.js, MongoDB, and Mongoose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}
