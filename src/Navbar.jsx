import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="container">
      <div>
        <Link className="nav-link" to={"/"}>
          {" "}
          Hello World Page{" "}
        </Link>
      </div>
      <div>
        <Link className="nav-link" to={"/counter-page"}>
          {" "}
          Counter Page
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
