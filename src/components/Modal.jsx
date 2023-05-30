import React, { useState } from 'react'
import closeIcon from '../img/close.svg'

const Modal = ({handleModal, saveData, newBgImage, clearbgImage}) => {
    const [precioValue, setPrecioValue] = useState("")
    const [imagenValue, setImagenValue] = useState("")
    const [descripValue, setDescripValue] = useState("")

    const onImgChange= (e, type)=>{
        var file = e.target.files[0]
        console.log(file)
        let reader = new FileReader()
        reader.onloadend = function(){
            if( type === 'bg'){
                newBgImage( reader.result )
            } else{
                setImagenValue(reader.result)
            }
        }

        if(file){
            reader.readAsDataURL(file);
        }
    }



  return (
    <div className='modalBg'>
        <button className='closeIcon' onClick={handleModal}>
            <img src={closeIcon} alt="" />
        </button>
        <div className='modalContent'>
            <div className='bgImageContent'>
                <label htmlFor="precio">Imagen de fondo</label>
                <input type='file' accept="image/*" onChange={(e)=>onImgChange(e, 'bg')}/>
                <button onClick={clearbgImage}>Borrar Imagen</button>
            </div>
            <div className='menuDataContent'>
                <div>
                    <label htmlFor="precio">Precio:</label>
                    <input type='number' value={precioValue} name='precio' onChange={(e)=>setPrecioValue(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="imagen">Imagen:</label>
                    <input type='file' name='imagen' accept="image/*" onChange={(e)=>onImgChange(e, 'menu')}/>
                </div>
                <div>
                    <label htmlFor="">Descripcion:</label>
                    <textarea type='text' value={descripValue} name='descripcion' onChange={(e)=>setDescripValue(e.target.value)} />
                </div>
                <div className='button-container'>
                    <button onClick={()=>saveData(precioValue, imagenValue, descripValue)}>Guardar menu</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Modal