"use client";
import { useState } from "react";
import custom from '/src/app/custom.module.css';
import style from '/src/app/style.module.css';

export default function Page() {
  const [h3style, setH3Style] = useState({ backgroundColor: "green" });
  const [color,setcolor] = useState("red");
  return (
    <div>
      <h1 style={{ backgroundColor: "bisque" }}>User Page</h1>
      <h3 style={h3style}>Heading 3 for user</h3>
      <button onClick={() => setH3Style({ backgroundColor: "pink" })}>
        Update Style
      </button>
      <h1 className={custom.main}>Custom CSS</h1>

      <h1 className={color=='red'?style.red:style.green}>Condition with Style</h1>
      <button onClick={()=>setcolor('green')}>Update color</button>
    </div>
  );
}
