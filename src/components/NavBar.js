import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navDiv">
        <p className="title">Restaurants</p>
        <ul className="navBar">
            <li className="link">
                <Link to="/">
                    Home
                </Link>
            </li>
        </ul>
    </div>
  );
}

export default NavBar;