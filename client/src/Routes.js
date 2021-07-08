import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Categories from "./pages/Categories";
import Timeline from "./pages/Timeline";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Header from "./components/Header";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/timeline">
          <Timeline />
        </Route>
        <Route exact path="/timeline/posts">
          <Categories />
        </Route>
        <Route exact path="/timeline/posts/:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
