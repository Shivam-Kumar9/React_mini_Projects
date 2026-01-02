import './modal.css'


function Modal({id, header, body, footer, close }) {
  return (
    <div id={ id || 'Modal'} class='modal'>
       <div className="modal_content">
          <div className="header">  <span onClick={close} className="close_modal_icon">❌</span>
              { header ? header :  <h1>header jon</h1>}
            </div> 
          <div className="body">
            {
             body? body : <div>
                <p>john doe content</p>
              </div>
            }
          </div>
          <div className="footer">  
            {footer? footer : <div>
                <h2>footer</h2>
              </div>}  
           </div>
        </div>
    </div>
  )
}

 

export default Modal
