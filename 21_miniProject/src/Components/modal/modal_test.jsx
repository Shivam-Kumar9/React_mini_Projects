

import Modal from './modal'

import { useState } from 'react';

function Modal_test() {
    const [isOpen, setIsOpen] =useState(false);
    const handleTogglePopup =()=>{setIsOpen(!isOpen)}

    const handleClose =()=>{
      setIsOpen(false)
    }
  return (
 <div>
    <button onClick={handleTogglePopup}>Modal</button>
    {isOpen && <Modal body={<div>custom content</div>} close={handleClose}/>}
 </div>  
  )
}

export default Modal_test