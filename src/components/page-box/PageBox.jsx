import "./PageBox.css";

export default function PageBox({ post }) {
  return (
    <div className="page-box">
      <h2 className="page-tile">{post.title}</h2>
      <img src={post.image} alt={post.title} className="blog-image" />
      <p className="page-content">{post.content}</p>
      <div className="page-link-box">
        <a
          className="page-link"
          href={post.liveLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          SITE
        </a>
        <a
          className="page-link"
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
