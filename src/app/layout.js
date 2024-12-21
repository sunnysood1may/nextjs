"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

/*export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};*/

export default function RootLayout({ children }) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>NextJS Tutorial</h1>

        {pathName !== "/login/loginteacher" ? (
          <ul className="login-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/productlist">ProductList</Link>
            </li>
            <li>
              <Link href="/productlistserver">ProductListServer</Link>
            </li>
            <li>
              <Link href="/login">Login main</Link>
            </li>
            <li>
              <Link href="/login/loginstudent">Student Login</Link>
            </li>
            <li>
              <Link href="/login/loginteacher">Teacher Login</Link>
            </li>
            <li>
              <Link href="/user">User</Link>
            </li>
          </ul>
        ) : (
          <Link href="/login">Go to Main Login Page</Link>
        )}

        {children}
      </body>
    </html>
  );
}
