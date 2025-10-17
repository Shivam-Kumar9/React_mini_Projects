import { useState } from 'react'
import './style.css'



export default function ImageSlider({url ,  limit}){
   
    const [image,setImage]= useState([])
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error,setError] = useState(null)
    const [loading, setLoading] =useState(false)
    

   async function fetchImage(getUrl) {
      try {
          setLoading(true)
        const response = await fetch(getUrl)
        const data     = await response.json();
        
        if(data){
            setImage(data)
        }
      } catch (error) {
        setError(error)
      }
        finally{
            setLoading(false)
        }
   }

   if (loading) {(<h1>Loading...</h1>)}
  
   if (error !== null ){
     return <div>Error ocurred !{error}</div>
   } 

    return <div className='container'></div>
}