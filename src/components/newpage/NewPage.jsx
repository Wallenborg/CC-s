import PageBox from "../page-box/PageBox";
import posts from "../../data/posts";
import "./NewPage.css";
import NewPageBox from "../new-page-box/NewPageBox";

export default function NewPage() {
  // find post with highest id
  const latestPost = posts.reduce((prev, current) => {
    return prev.id > current.id ? prev : current;
  });

  return (
    <div className="wrapper">
      <h2 className="page-title">This Sundays Post:</h2>
      <div className="newest-page-box">
        <NewPageBox key={latestPost.id} post={latestPost} />
      </div>
    </div>
  );
}
