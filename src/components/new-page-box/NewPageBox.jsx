import "./NewPageBox.css";

export default function NewPageBox({ post }) {
  return (
    <div className="new-page-box">
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
          Visit Site
        </a>
        <a
          className="new-page-link"
          href={post.codeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
    </div>
  );
}
