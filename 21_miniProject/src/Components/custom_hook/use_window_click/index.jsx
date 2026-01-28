import { useLayoutEffect, useState } from "react"



export default function useWindowResize(){
    const [windowSize, setWindowSize] = useState({
            width : window.innerWidth,
            height : window.innerHeight
        })
       
    function handleResize(){
        setWindowSize({
            width : window.innerWidth,
            height : window.innerHeight
        })
    }
    
  // use efect is also good but   layout is beter for this   ---- it render that before  paint and after dom ele display in web
    useLayoutEffect(()=>{
        // handleResize()  
        // for initial size
       window.addEventListener('resize',handleResize)

     return ()=>window.removeEventListener('resize',handleResize) 
    },[windowSize])

    return windowSize
}