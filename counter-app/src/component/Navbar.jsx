import React from "react";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
//   const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        
          <h1>HOME</h1>
        <h1>COUNTER</h1>
        <h1>STOPWATCH</h1>
        <h1>TODO</h1>
        <h1>CRUD OPRETION</h1>
      </div>
    </>
  );
};

export default Navbar;
