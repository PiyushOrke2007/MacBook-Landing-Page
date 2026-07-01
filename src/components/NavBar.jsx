import React from "react";
import { NavLinks } from "../constants/index.jsx";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {NavLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search Logo" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart Logo" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
