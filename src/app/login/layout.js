"use client";
import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div>
      {pathName !== "/login/loginteacher" ? (
        <ul className="login-menu"> 
          <li>
          <Link href="/">Home</Link>
          </li>
          <li>
          <Link href="/about">About</Link>
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
        </ul>
      ) : (
        <Link href="/login">Go to Main Login Page</Link>
      )}
      {children}
    </div>
  );
}
