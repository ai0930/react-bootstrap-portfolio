import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>成蹊大学軽音楽部</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/schedule">schedule</Link>
          </li>
          <li>
            <Link to="/member">member</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
