"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  let data = "shobhit";
  const [name, setName] = useState("sunny");
  const apple = (item) => {
    alert(item);
    setName("shilpa");
    data = "sood";
  };
  const InnerComp = () => {
    return <h1>Inner component</h1>;
  };

  const router = useRouter();
  const navigate=(name)=>{
    router.push(name);
  }

  return (
    /*<main className={styles.main}> */ 
    <main>
      <Link href="/">Home</Link>&nbsp;&nbsp;
      <Link href="/login">Login</Link>&nbsp;&nbsp;
      <Link href="/about">About</Link>&nbsp;&nbsp;
      <button onClick={()=>router.push("/login")}>Login</button>&nbsp;&nbsp;
      <button onClick={()=>navigate("/about")}>About</button>&nbsp;&nbsp;

      <User name="sunny" />
      <h1>Home Page</h1>
      <h1>
        Events, function and state {name} {data}
      </h1>
      <button onClick={() => alert("help next js")}>Click me</button>
      <button onClick={() => apple("banana")}>Click apple</button>
      <InnerComp />
      {InnerComp()}
    </main>
  );
}

const User = (props) => {
  return (
    <div>
      <h2>User name is {props.name}</h2>
    </div>
  );
};
