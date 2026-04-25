import { useState } from "react";
import "./App.css";
import Navbar from "./Componentes/Navbar";
import Button from "./Componentes/Button";
import { FaShoppingCart, FaBolt, FaHeart } from "react-icons/fa";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [message, setMessage] = useState("");

  const product = {
    id: 1,
    name: "Vestido Bandeau",
    category: "Mujer",
    price: 289900,
    oldPrice: 359900,
    image:
      "https://static.zara.net/assets/public/ca45/7684/4245455fb129/532529ff5bcd/03253025700-a1/03253025700-a1.jpg?ts=1776860410068&w=1126",
  };

  const featuredProducts = [
    {
      id: 2,
      name: "Tacón Kitten",
      price: 650000,
      image:
        "https://static.zara.net/assets/public/d712/be5e/36914e40bfb9/c56142f3a6e0/11271710002-a1/11271710002-a1.jpg?ts=1776697580773&w=1126",
    },
    {
      id: 3,
      name: "Cahqueta Denim",
      price: 399000,
      image:
        "https://static.zara.net/assets/public/d4f7/c57d/df134b3d8181/493f92e248d0/07627047406-a1/07627047406-a1.jpg?ts=1776787841165&w=1126",
    },
    {
      id: 4,
      name: "Jersey Fino",
      price: 420000,
      image:
        "https://static.zara.net/assets/public/1562/fb6c/b7874ae5bff6/3d3db6014500/08779006423-a1/08779006423-a1.jpg?ts=1772554891489&w=1126",
    },
    {
      id: 5,
      name: "Bailarina Piel",
      price: 350000,
      image:
        "https://static.zara.net/assets/public/af9e/b286/dfd040898d7e/dd734f485faf/12578711105-e1/12578711105-e1.jpg?ts=1776769791702&w=1126",
    },
  ];

  const formatPrice = (value) =>
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0,
    }).format(value);

  const handleAddToCart = (productName) => {
    setCartCount((prev) => prev + 1);
    setMessage(`${productName} fue agregado al carrito.`);
  };

  const handleBuyNow = (productName) => {
    setMessage(`Redirigiendo a compra de ${productName}...`);
  };

  const handleFavorite = (productName) => {
    setMessage(`${productName} fue agregado a favoritos.`);
  };

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-overlay">
            <span className="hero-badge">Nueva colección</span>
            <h1>Explora nuevos estilos</h1>
            <p>
              Descubre prendas y zapatos con un diseño elegante, moderno y
              femenino.
            </p>

            <Button
              variant="primary"
              icon={FaBolt}
              iconPosition="right"
              onClick={() => handleBuyNow("la nueva colección")}
            >
              Comprar ahora
            </Button>
          </div>
        </section>

        <section className="featured-categories">
          <div className="category-card men">
            <div className="category-overlay">
              <h3>Hombre</h3>
            </div>
          </div>

          <div className="category-card women">
            <div className="category-overlay">
              <h3>Mujer</h3>
            </div>
          </div>

          <div className="category-card shoes">
            <div className="category-overlay">
              <h3>Zapatos</h3>
            </div>
          </div>

          <div className="category-card accessories">
            <div className="category-overlay">
              <h3>Accesorios</h3>
            </div>
          </div>
        </section>

        <section className="product-highlight">
          <div className="product-image-box">
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-info">
            <span className="product-category">{product.category}</span>
            <h2>{product.name}</h2>

            <div className="price-box">
              <span className="old-price">{formatPrice(product.oldPrice)}</span>
              <span className="current-price">{formatPrice(product.price)}</span>
            </div>

            <p className="product-description">
              Un diseño sofisticado con caída elegante, ideal para eventos,
              cenas o looks casuales refinados.
            </p>

            <div className="product-buttons">
              <Button
                variant="secondary"
                icon={FaShoppingCart}
                onClick={() => handleAddToCart(product.name)}
              >
                Agregar al carrito
              </Button>

              <Button
                variant="outline"
                icon={FaBolt}
                onClick={() => handleBuyNow(product.name)}
              >
                Comprar ahora
              </Button>

              <Button
  variant="outline"
  icon={FaHeart}
  onClick={() => handleFavorite(product.name)}
  className="favorite-btn"
/>
            </div>

            {message && <p className="action-message">{message}</p>}
          </div>
        </section>

        <section className="products-section">
          <div className="section-header">
            <h2>Destacados de la semana</h2>
          </div>

          <div className="products-grid">
            {featuredProducts.map((item) => (
              <article className="product-card" key={item.id}>
                <div className="product-card-image-box">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="product-card-body">
                  <h3>{item.name}</h3>
                  <p>{formatPrice(item.price)}</p>

                  <Button
                    variant="secondary"
                    icon={FaShoppingCart}
                    onClick={() => handleAddToCart(item.name)}
                  >
                    Agregar
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <h3>Diva</h3>
        <p>© 2026 Tu tienda. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
