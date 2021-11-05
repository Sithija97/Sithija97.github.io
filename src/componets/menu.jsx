import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="menu-btn">
        <button>
          <BiMenu onClick={() => setIsOpen(!isOpen)} />
        </button>
      </div>

      <header className={isOpen ? "header open" : "header"}>
        <nav>
          <ul>
            <li onClick={() => setIsOpen(false)}>
              <Link to="/">Homepage</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link to="/projects">Projects</Link>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <Link to="/contact-me">Contact Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Menu;
