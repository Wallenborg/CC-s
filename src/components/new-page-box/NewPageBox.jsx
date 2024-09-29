import React, { useState, useEffect } from "react";
import "./NewPageBox.css";

export default function NewPageBox({ post }) {
  const [postOpacity, setPostOpacity] = useState(0);

  const handleScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Calculate the new opacity based on scroll position
    // You can adjust the divisor for different opacity rates

    const newPostOpacity = Math.max(0, 0 + scrollY / 800);
    setPostOpacity(newPostOpacity);
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
    <div className="new-page-box" style={{ opacity: postOpacity }}>
      <img src={post.image} alt={post.title} className="new-blog-image" />

      <h2 className="new-page-title">{post.title}</h2>
      <p className="new-page-content">{post.content}</p>

      <div className="new-page-link-box">
        <a
          className="new-page-link"
          href={post.liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          SITE
        </a>
        <a
          className="new-page-link"
          href={post.codeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          CODE
        </a>
      </div>
    </div>
  );
}
