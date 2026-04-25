import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Button from './Componentes/Button'
import { FaBeer, FaTrash } from "react-icons/fa";
import Navbar from "./Componentes/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div>
      <Navbar />
    </div>

<div className="product-container">
  <img
    className="product-image"
    src="https://hmcolombia.vtexassets.com/unsafe/768x0/center/middle/https%3A%2F%2Fhmcolombia.vtexassets.com%2Farquivos%2Fids%2F6144384-560-auto%2FVestido-hasta-la-pantorrilla-con-escote-barco---Marron-oscuro---H-M-CO.jpg%3Fv%3D639054432716470000"
    alt="Vestido"
  />

  <div className="product-buttons">
    <Button variant="secondary">
      Agregar al carrito
    </Button>

    <Button variant="outline">
      Comprar ahora
    </Button>
  </div>
</div>

<div>
      <img src={"https://hmcolombia.vtexassets.com/unsafe/768x0/center/middle/https%3A%2F%2Fhmcolombia.vtexassets.com%2Farquivos%2Fids%2F6144384-560-auto%2FVestido-hasta-la-pantorrilla-con-escote-barco---Marron-oscuro---H-M-CO.jpg%3Fv%3D639054432716470000"} alt="Descripción" />
    </div>
    </>
  )
}

export default App
