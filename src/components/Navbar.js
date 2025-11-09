import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  const navLinks = [
    { to: "/", name: "Home" },
    { to: "/menu", name: "Menu" },
    { to: "/about", name: "About" },
    { to: "/contact", name: "Contact" },
    { to: "/cart", name: "Cart 🛒" },
  ];

  const getLinkClass = (path) => {
    return location.pathname === path ? "activeLink" : "";
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="Pedro's Pizzeria Logo" />
      </div>

      <div className="rightSide">
        {/* Regular links for desktop/large screens */}
        <div className="mainLinks">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to} className={getLinkClass(link.to)}>
              {" "}
              {link.name}{" "}
            </Link>
          ))}
        </div>

        {/* Hidden links for mobile/tablet, slides from the right */}
        <div className="hiddenLinks" id={openLinks ? "open" : "close"}>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              onClick={toggleNavbar}
              className={getLinkClass(link.to)}
              // Staggered animation delay
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {" "}
              {link.name}{" "}
            </Link>
          ))}
        </div>

        <button onClick={toggleNavbar} className="hamburgerBtn">
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;