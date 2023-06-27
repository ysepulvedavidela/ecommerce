import React from 'react';
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>Mi nueva tienda en React</h3>
            <div>
                <button>Videojuegos</button>
                <button>Consolas</button>
                <button>Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export { NavBar }