import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
        <Link className="menu-link" to="/carrito">
            <i class="fa-solid fa-cart-shopping" alt="Carrito de compras"></i>
            <span className="numerito">{cantidadEnCarrito()}</span>
        </Link>
    </div>
  )
}

export default CartWidget