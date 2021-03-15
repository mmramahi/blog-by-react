import { Link } from "react-router-dom";

const Home = ({ blogs }) => {
  return (
    <div className="blogs content">
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <Link className="single" to={"/" + blog.id} key={blog.id}>
          <h3 className="title">{blog.tilte}</h3>
          <p className="snippet">{blog.snippet}</p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
