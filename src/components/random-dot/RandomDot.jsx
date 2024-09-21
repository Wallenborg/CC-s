import React, { useEffect, useRef } from "react";
import "./RandomDot.css";

const RandomDot = ({ headerRef }) => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dotElement = dotRef.current;

    const moveDot = () => {
      const headerRect = headerRef.current.getBoundingClientRect();
      const dotHeight = dotElement.clientHeight;
      const dotWidth = dotElement.clientWidth;

      const availSpaceV = headerRect.height - dotHeight;
      const availSpaceH = headerRect.width - dotWidth;

      const randNumV = Math.round(Math.random() * availSpaceV);
      const randNumH = Math.round(Math.random() * availSpaceH);

      dotElement.style.top = randNumV + "px";
      dotElement.style.left = randNumH + "px";
    };

    const changeInterval = 2000;
    const intervalId = setInterval(moveDot, changeInterval);

    moveDot();

    return () => clearInterval(intervalId);
  }, [headerRef]);

  return <div className="dot" ref={dotRef}></div>;
};

export default RandomDot;
