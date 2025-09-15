import React from 'react'
import { useState } from 'react'
import data from './data'

function Accordian() {
 
 const [selected, setSelected] = useState(null)
 const handleSingleSelect = (currentid)=>{
  console.log(currentid); setSelected(currentid)
 }
  return (<div className='wrapper'>
     <div className="accordian">
        {
            data && data.length > 0  ?
            data.map(dataItem => 
            <div key={dataItem.id} className="item">
             <div onClick={()=>handleSingleSelect(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
             </div>
            </div> ) 
            : <div>NO data found</div>
        }
     </div>
    </div>)
}

export default Accordian