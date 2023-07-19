import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <h1>Mi Tienda</h1>
            <div className='NavBar-right'>
                <ul>
                    <NavLink to="/" className="li">Inicio</NavLink>
                    <NavLink to="/categoria/manga" className="li">Mangas</NavLink>
                    <NavLink to="/categoria/comic" className="li">Comics</NavLink>
                    <NavLink to="/categoria/figura" className="li">Figuras</NavLink>
                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar