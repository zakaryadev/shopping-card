import React from "react";

export default function Header() {
  return (
    <nav className="most-color">
      <div className="container">
        <div className="nav-wrapper">
          <a href="index.html" className="brand-logo">
            React Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="collapsible.html">React Shop</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
