import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Categories from "./pages/Categories";
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
        <Route exact path="/posts">
          <Categories />
        </Route>
        <Route exact path="/posts/:id">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
