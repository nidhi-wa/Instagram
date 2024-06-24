import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from '@/components/SessionWrapper';
import Header from '@/components/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Insta App",
  description: "Get new version of insta",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang='en'>
        <body className={inter.className}>
          <Header />

          {children}
        </body>
      </html>
    </SessionWrapper>
  );
}