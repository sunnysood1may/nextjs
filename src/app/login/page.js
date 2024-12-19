"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
    const navigate=(name)=>{
      router.push(name);
    }
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/">Home</Link>&nbsp;&nbsp;
      <Link href="/login">Login</Link>&nbsp;&nbsp;
      <Link href="/about">About</Link>&nbsp;&nbsp;
      <button onClick={()=>router.push("/login")}>Login</button>&nbsp;&nbsp;
      <button onClick={()=>navigate("/about")}>About</button>&nbsp;&nbsp;
    </div>
  );
};

export default Login;
