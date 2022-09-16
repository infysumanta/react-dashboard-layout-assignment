import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" exact>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles">
            <span>Articles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/people">
            <span>People</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/books">
            <span>Books</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/help">
            <span>Help & Support</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
