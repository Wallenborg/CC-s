import React, { useRef } from "react";
import RandomDot from "../random-dot/RandomDot";
import SubTitle from "../sub-title/SubTitle";
import { FaLinkedin, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const headerRef = useRef(null); // make header ref

  return (
    <header className="header-box" ref={headerRef}>
      <div className="link-title-box">
        <h1 className="title">CC:s</h1>
        <SubTitle />
        <div className="link-box-header">
          <a
            className="header-link"
            href="https://www.instagram.com/niklaswallenborg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            className="header-link"
            href="https://www.niklaswallenborg.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLaptop />
          </a>
          <a
            className="header-link"
            href="http://linkedin.com/in/niklas-wallenborg-026bb7131"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="header-link"
            href="https://github.com/Wallenborg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </div>
      <RandomDot headerRef={headerRef} /> {/* Send ref as a prop */}
    </header>
  );
}
