import React, { useRef } from "react";
import RandomDot from "../random-dot/RandomDot";
import SubTitle from "../sub-title/SubTitle";
import "./Header.css";

export default function Header() {
  const headerRef = useRef(null); // make header ref

  return (
    <header className="header-box" ref={headerRef}>
      <h1 className="title">CC:s</h1>
      <SubTitle />
      <RandomDot headerRef={headerRef} /> {/* Send ref as a prop */}
    </header>
  );
}
