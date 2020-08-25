import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./NavbarItem";

/**
 * Header Component
 * @params props {}
 * @description Main App Header Component
 * @function Function Component
 */
export default function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <span className="navbar__brand">Y</span>
        <span className="navbar__text">Hacker News</span>
      </Link>
      <ul className="navbar__list">
        <NavbarItem text="New" link="/" />
        <NavbarItem text="Top" link="/top" />
      </ul>
    </nav>
  );
}
