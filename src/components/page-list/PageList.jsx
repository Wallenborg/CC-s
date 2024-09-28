import { useState } from "react";
import PageBox from "../page-box/PageBox";
import posts from "../../data/posts";
import "./PageList.css";

export default function PageList() {
  // State to track how many posts are currently visible, starting with 4
  const [visibleCount, setVisibleCount] = useState(4);

  // Get the post with the highest id
  const maxId = Math.max(...posts.map((post) => post.id));

  // Filter out the post with the highest id and sort the remaining posts in descending order
  const sortedPosts = [...posts]
    .filter((post) => post.id !== maxId) // Exclude the post with the highest id
    .sort((a, b) => b.id - a.id); // Sort in descending order (latest posts first)

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
