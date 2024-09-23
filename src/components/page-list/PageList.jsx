import { useState } from "react";
import PageBox from "../page-box/PageBox";
import posts from "../../data/posts";
import "./PageList.css";

export default function PageList() {
  // State to track how many posts are currently visible, starting with 4
  const [visibleCount, setVisibleCount] = useState(4);

  // Sort posts in ascending order based on their id (assuming lower id is older post)
  const sortedPosts = [...posts].sort((a, b) => a.id - b.id);

  // Handle loading more posts
  const loadMore = () => {
    // Increase the visible count by 4
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="wrapper">
      <h2 className="page-title">Sundays past...</h2>

      {/* Page list, only show up to visibleCount posts */}
      <div className="page-list-box">
        {sortedPosts.slice(0, visibleCount).map((post) => (
          <PageBox key={post.id} post={post} />
        ))}
      </div>

      {/* Load More button is displayed only if there are more posts to show */}
      {visibleCount < sortedPosts.length && (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
