import { useState } from 'react'
import './style.css'
import {FaStar} from 'react-icons/fa'

export default function StarRating({count =10}){
     const [rating, setRating] = useState(0)
     const [hoverRate , setHoverRate] = useState(0)
    
     const handleClick =(currentID)=>{
      console.log('click',currentID);
      setRating(currentID)
     }
     const handleMouseEnter= (currentID)=>{
      console.log('enter',currentID);
      setHoverRate(currentID)
     }
     const handleMouseLeave = (i)=>{
       console.log('leave',i);
       setHoverRate(rating)
     }
     
    return (<div>
         {[...Array(count)].map((_,i)=>{
            i+=1
         return <FaStar 
          key={i}
          size={40}
          className={i <= ( hoverRate || rating ) ? 'active' : 'inactive' }
          onClick={()=> handleClick(i)}
          onMouseEnter={()=>handleMouseEnter(i)}
          onMouseLeave={()=>handleMouseLeave(i)}
         />
         })}
        </div>)
}