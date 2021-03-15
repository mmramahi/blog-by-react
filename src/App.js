import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogs } from "./services/blogs";

import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import NotFoun from "./NotFoun";
import Blog from "./Blog";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    let mounted = true;
    getBlogs().then((items) => {
      if (mounted) {
        setBlogs(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home blogs={blogs} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/:y">
              <Blog blogs={blogs} />
            </Route>
            <Route path="*">
              <NotFoun />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
