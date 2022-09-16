import "./App.css";
import { NavLink, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Dashboard</div>
      </header>
      <main className="main">
        <div className="sidebar-container">
          <ul>
            <li>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/articles" exact>
                Articles
              </NavLink>
            </li>
            <li>
              <NavLink to="/people" exact>
                People
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" exact>
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/help" exact>
                Help & Support
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="body-container">
          <Switch>
            <Route path="/" exact>
              <h2>🚀 Welcome to Homepage!</h2>
            </Route>
            <Route path="/help">Help</Route>
            <Route path="/articles" exact>
              Articles
            </Route>
            <Route path="/people">People</Route>
            <Route path="/books">Books</Route>
            <Route path="/articles/:slug">Article</Route>
            <Route path="*">NotFound</Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
