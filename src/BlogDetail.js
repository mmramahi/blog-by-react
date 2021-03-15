import { Link } from "react-router-dom";
import { deleteItem } from "./services/blogs";
import logoDelete from "./delete.svg";

const BlogDetail = ({ blog, blogIndex }) => {
  return (
    <div className="details content">
      <h2>{blog.tilte}</h2>
      <div className="content">
        <p>{blog.body}</p>
      </div>
      <Link className="delete">
        <img
          src={logoDelete}
          alt="trashcan"
          onClick={(e) => {
            e.preventDefault();
            deleteItem(blog.id);
          }}
        />
      </Link>
    </div>
  );
};

export default BlogDetail;
