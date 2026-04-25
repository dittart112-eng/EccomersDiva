import React, { useState } from "react";
import "../Style/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Diva</div>

      <ul className="navbar-links">
        <li
          className="navbar-item mega-menu-container"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="menu-button">Categorías</button>

          {isOpen && (
            <div className="mega-menu">
              <div className="mega-column">
                <h3>Ropa Mujer</h3>
                <a href="/">Vestidos</a>
                <a href="/">Blusas</a>
                <a href="/">Pantalones</a>
                <a href="/">Jeans</a>
                <a href="/">Faldas</a>
                <a href="/">Chaquetas</a>
              </div>

              <div className="mega-column">
                <h3>Ropa Hombre</h3>
                <a href="/">Camisas</a>
                <a href="/">Camisetas</a>
                <a href="/">Pantalones</a>
                <a href="/">Jeans</a>
                <a href="/">Chaquetas</a>
                <a href="/">Sudaderas</a>
              </div>

              <div className="mega-column">
                <h3>Zapatos</h3>
                <a href="/">Tacones</a>
                <a href="/">Tenis</a>
                <a href="/">Botas</a>
                <a href="/">Sandalias</a>
                <a href="/">Mocasines</a>
                <a href="/">Deportivos</a>
              </div>

              <div className="mega-column">
                <h3>Categorías</h3>
                <a href="/">Nueva colección</a>
                <a href="/">Ofertas</a>
                <a href="/">Más vendidos</a>
                <a href="/">Accesorios</a>
                <a href="/">Bolsos</a>
                <a href="/">Temporada</a>
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;