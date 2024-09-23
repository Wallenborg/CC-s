import PageBox from "../page-box/PageBox";
import posts from "../../data/Posts";
import "./NewPage.css";

export default function NewPage() {
  // find post with highest id
  const latestPost = posts.reduce((prev, current) => {
    return prev.id > current.id ? prev : current;
  });

  return (
    <div className="wrapper">
      <h2 className="page-title">This Sundays Post:</h2>
      <div className="newest-page-box">
        <PageBox key={latestPost.id} post={latestPost} />
      </div>
    </div>
  );
}
