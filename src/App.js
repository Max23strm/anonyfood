import { useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import MenuBody from './components/MenuBody';
import MenuFooter from './components/MenuFooter';
import Options from './components/Options';
import Modal from './components/Modal';
import useData from './hooks/useData';

function App() {

  const { menuData, openModal, bgImage, handleModal, saveData, newBgImage, clearbgImage } = useData()
  const printRef = useRef() 
  
  return (
    <div className="App">
      <Options handleModal={handleModal} printRef={printRef} />
      {openModal && <Modal menuData={menuData} handleModal={handleModal} saveData={saveData} newBgImage={newBgImage} clearbgImage={clearbgImage}/>}
      <div 
        ref={printRef}
        className='menuImage' 
        style={{
          backgroundImage:bgImage
        }}
      >
        <Header/>
        <MenuBody menuData={menuData}/>
        <MenuFooter/>
      </div>
    </div>
  );
}

export default App;
