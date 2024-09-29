import { useEffect } from "react";
import gsap from "gsap";
import "./SubTitle.css";

export default function SubTitle() {
  useEffect(() => {
    // Select sub-title element
    const subTitle = document.querySelector(".sub-title");

    // Split text into individual letters for sub-title
    const subTitleLetters = subTitle.textContent.split("");
    subTitle.textContent = ""; // Empty the sub-title element

    // Create a timeline animation for sub-title
    const subTl = gsap.timeline({ delay: 1.25, repeat: -1, yoyo: true }); // repeat: -1 for infinite loop, yoyo: true for reverse animation
    subTitleLetters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      subTitle.appendChild(span);

      subTl.to(span, {
        duration: 0.2,
        color: "#2e2e2e",
        stagger: 0.05, // Adds delay between each letter
      });
    });
  }, []);

  return (
    <p className="sub-title">
      - C r e a t i v e C o d i n g S u n d a y s . . .
    </p>
  );
}
