import React, { useRef } from "react";
import RandomDot from "../random-dot/RandomDot";
import "./Divider.css";

export default function Divider() {
  const dividerRef = useRef(null); // Skapa ref för Divider

  return (
    <div className="divider" ref={dividerRef}>
      <RandomDot headerRef={dividerRef} /> {/* Skicka ref som prop */}
    </div>
  );
}
