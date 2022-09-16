import { Route, Switch } from "react-router-dom";
import Article from "./components/Article";
import Articles from "./components/Articles";
import Books from "./components/Books";
import Help from "./components/Help";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import People from "./components/People";

function Main() {
  return (
    <div className="page-content">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/articles/:slug">
          <Article />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
