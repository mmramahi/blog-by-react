import { useParams } from "react-router-dom";
import BlogDetail from "./BlogDetail";

const Blog = ({ blogs }) => {
  const { y } = useParams();
  let v = parseInt(y);

  const blog = blogs.find((x) => x.id === v);
  const blogIndex = blogs.findIndex((x) => x.id === v);
  console.log(blogIndex);

  return <>{blog && <BlogDetail blog={blog} blogIndex={blogIndex} />}</>;
};

export default Blog;
