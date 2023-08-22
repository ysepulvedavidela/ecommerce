import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav class="navbar" className="navbar">
        <Link to="/" className="logo"><h1>Tienda React</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos/videojuego">Videojuegos</Link></li>
            <li><Link className="menu-link" to="/productos/electronica">Electronicos</Link></li>
            <li><Link className="menu-link" to="/productos/funko">Funko POP!</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar