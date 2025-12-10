
import React, { useState } from 'react'
import QRCode from 'react-qr-code';
 

function QRcode() {
  const [qrCode, setQrCode] = useState('');
  const [input, setInput] = useState('')

  const handleGenerate = () =>{
    setQrCode(input)
    setInput('')
  }
  return (
    <div>
      <h1>QRcode Generator</h1>

        <div>
          <input onChange={(e)=>setInput(e.target.value)}
           value={input}
          type="text" name='' placeholder='Enter your value here' />
          <button disabled={input && input.trim() !=="" ?false :true}
           onClick={()=>handleGenerate()}>Generate</button>
        </div>

         <div style={{border:"2px solid blue" , display:"inline-block",margin : '10px',padding: '0px'}}>
          <QRCode
          // id='qr_code_value'
          value={qrCode}
          size={400}
          
          />
         </div>

     </div>
  )
}

export default QRcode