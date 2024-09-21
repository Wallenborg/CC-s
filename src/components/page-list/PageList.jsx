import PageBox from "../page-box/PageBox";
import posts from "../../data/posts";
import "./PageList.css";

export default function PageList() {
  return (
    <div className="page-list-box">
      {posts.map((post) => (
        <PageBox key={post.id} post={post} />
      ))}
    </div>
  );
}
