import React from 'react'

const MenuBody = ({menuData}) => {
  return (
    <div className='menu-body' >
        <div className='menu-body-priceArea'>
            <h3>${menuData.precio}</h3>
            <img src={menuData.imagen} alt="Imagen de comida" />
        </div>
        <p>{menuData.descripcion}</p>
    </div>
  )
}

export default MenuBody