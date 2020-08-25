/**
 * Navbar Item Component
 * @params props {text, link}
 * @description Reuseable Component For Navbar Links
 * @function Function Component
 */

import React from "react";
import { NavbarItemComponentProps } from "../../@types/components";
import { NavLink } from "react-router-dom";

export default ({ text, link }: NavbarItemComponentProps) => (
  <li className="navbar__item">
    <NavLink activeClassName="active" exact to={link} className="navbar__link">
      {text}
    </NavLink>
  </li>
);
