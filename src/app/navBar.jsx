import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Main</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/login'>basket</Link>
        </li>
      </ul>
  )
}

export default NavBar