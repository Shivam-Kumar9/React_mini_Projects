

import Modal from './modal'

import { useState } from 'react';

function Modal_test() {
    const [isOpen, setIsOpen] =useState(false);
  return (
 <div>
    <button>Modal</button>
     
    {isOpen && <Modal/>}
 </div>  
  )
}

export default Modal_test