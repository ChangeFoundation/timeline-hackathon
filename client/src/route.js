import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Categories from "./components/Categories";
import Timeline from "./components/Timeline";
import Post from "./components/Post";
import Home from "./components/Home"

function Routes() {
  return (
    <Router>
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
