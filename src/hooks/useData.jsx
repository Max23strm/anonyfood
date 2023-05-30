import { useState } from "react"


const useData = () => {
    const [openModal, setOpenModal] = useState(false)

    const handleModal = () =>{
        setOpenModal(prev=> !prev)
    }

    const [bgImage, setBgImage] = useState(null)

    const newBgImage = (data) => {
        setBgImage(`url(${data})`)
        handleModal()
    }

    const clearbgImage = () =>{
        setBgImage(null)
        handleModal()
    }


    const [menuData, setMenuData] = useState({
        precio:100,
        imagen:"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempora. Excepturi nemo architecto, repellat accusamus illo ex praesentium voluptates quis veniam, assumenda unde quia voluptatem omnis odit, quibusdam itaque blanditiis!"
    })
    
    const saveData = (precio, imagen, descripcion) => {
        setMenuData({
            precio:precio,
            imagen:imagen,
            descripcion:descripcion
        })
        setOpenModal(prev=> !prev)
    }

  return {
    menuData,
    openModal,
    bgImage,
    saveData,
    handleModal,
    newBgImage,
    clearbgImage
  }
}

export default useData