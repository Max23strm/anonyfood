import React from 'react'
import useData from '../hooks/useData'
import useExport from '../hooks/useExport'

const Options = ({handleModal, printRef}) => {
  const {exportAsImage} = useExport()

  const handleDownload = () =>{
    exportAsImage(printRef, 'Menu')
  }

  return (
    <div className="options-menu">
        <button onClick={handleModal}>Editar</button>
        <button onClick={()=>handleDownload()}>Descargar</button>
    </div>
  )
}

export default Options