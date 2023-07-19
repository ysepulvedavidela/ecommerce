import React, { useState } from 'react'

const ItemDetail = ({data}) => {

  const [itemQuantity, setItemQuantity] = useState(1);
  const handleAdd = () => {
    setItemQuantity(itemQuantity+1);
  }

  const handleLess = () => {
      setItemQuantity(itemQuantity-1);
  }
  return (
    <div className='itemDetail-card'>
        <img src={data.img} alt={`imagen de ${data.title}`} />
        <div>
            <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
            <div>
                <p>Categoria: {data.category}</p>
                <p>Precio: {data.price}</p>
            </div>
            <div className='card-buttons'> 
                <button onClick={handleLess} disabled={itemQuantity <= 1}><i class="fa-solid fa-minus"></i></button>
                <p>{itemQuantity}</p>
                <button onClick={handleAdd}><i class="fa-solid fa-plus"></i></button>
            </div>
            <button>Agregar Al Carrito</button>
        </div>
    </div>
  )
}

export default ItemDetail