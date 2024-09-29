import React, { useState, useEffect } from "react";
import "./Info.css";

export default function Info() {
  const [arrowOpacity, setArrowOpacity] = useState(0.5);
  const [textOpacity, setTextOpacity] = useState(1);

  const handleScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Calculate the new opacity based on scroll position
    // You can adjust the divisor for different opacity rates
    const newOpacity = Math.max(0, 0.8 - scrollY / 600);
    setArrowOpacity(newOpacity);
    const newTextOpacity = Math.max(0, 1 - scrollY / 800);
    setTextOpacity(newTextOpacity);
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="info-text-box">
      <p className="arrow" style={{ opacity: arrowOpacity }}>
        &#8659;
      </p>
      <p className="info-text" style={{ opacity: arrowOpacity }}>
        My name is Niklas Wallenborg, and I&rsquo;m a creative developer and
        interdisciplinary artist. &quot;Creative Coding Sundays&quot; is a hobby
        project of mine, aimed at evolving and learning as a creative developer.
        I&rsquo;ll try to do a new creative coding project each
        week&mdash;whether big or small&mdash;and share it here every Sunday.
      </p>
    </div>
  );
}
