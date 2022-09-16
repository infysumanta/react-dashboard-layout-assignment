import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <span className="site-title">&emsp;Dashboard</span>
        </Link>
      </div>
      <div className="header-search">
        <input type="search" placeholder="Search Documentation..." />
      </div>
    </div>
  );
}

export default Header;
