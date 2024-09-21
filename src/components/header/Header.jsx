import React, { useRef } from "react";
import RandomDot from "../random-dot/RandomDot";
import SubTitle from "../sub-title/SubTitle";
import { FaLinkedin } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const headerRef = useRef(null); // make header ref

  return (
    <header className="header-box" ref={headerRef}>
      <div className="link-title-box">
        <h1 className="title">CC:s</h1>
        <a
          className="linkedin"
          href="http://linkedin.com/in/niklas-wallenborg-026bb7131"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
      <SubTitle />
      <RandomDot headerRef={headerRef} /> {/* Send ref as a prop */}
    </header>
  );
}
