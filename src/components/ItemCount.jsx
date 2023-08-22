import React from 'react'

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

  return (
    <div>

        <div className="item-count">
            <button onClick={handleRestar}><i class="fa-solid fa-minus"></i></button>
            <h2>{cantidad}</h2>
            <button onClick={handleSumar}><i class="fa-solid fa-plus"></i></button>
        </div>
        <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount