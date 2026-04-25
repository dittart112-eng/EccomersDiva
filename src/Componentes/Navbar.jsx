import React, { useState } from "react";
import "../Style/Navbar.css";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

const Navbar = ({ cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">Diva</div>

        <ul className="navbar-center">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#destacados">Destacados</a></li>
          <li><a href="#mujer">Mujer</a></li>
          <li><a href="#hombre">Hombre</a></li>
          <li><a href="#ofertas">Ofertas</a></li>
        </ul>

        <div className="navbar-actions">
          <button className="icon-button" aria-label="Buscar">
            <FaSearch />
          </button>

          <button className="icon-button cart-button" aria-label="Carrito">
            <FaShoppingCart />
            <span className="cart-badge">{cartCount}</span>
          </button>

          <button
            className="menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

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
      </nav>
    </header>
  );
};

export default Navbar;