import React from "react";
//import { Link } from "react-router-dom";
//import "./style.css";

function Navbar() {
  return (
    <nav>
      <div>
<<<<<<< HEAD
          <h1>Navbar Paw - Prints</h1>
         
          
=======
        <h1>Navbar Paw - Prints</h1>
        <Link to="/" className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"} >
          Log in
        </Link>



        <Link to="/signup" className={window.location.pathname === "/signup" || window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
          Sign up
        </Link>

>>>>>>> 0eccf63af3227cda39e60f92f9c19d3c68d5a462
      </div>
    </nav>
  );
}

export default Navbar;


/*<Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} >
Log in
</Link>
<Link to="/signup" className={window.location.pathname === "/signup" || window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}>
Sign up
</Link>*/