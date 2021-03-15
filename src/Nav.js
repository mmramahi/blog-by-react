import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="site-title">
        <Link to="/">
          <h1>Blog Home Page</h1>
        </Link>
        <p>Test bloger site built by React</p>
      </div>
      <ul>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
