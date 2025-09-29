import { useEffect, useState } from "react"


export default function RandomColor(){
   const [typeOfColor, setTypeOfColor] = useState("hex")
   const [color, setColor] = useState("#000000")
   
     function randomColorUtility(limit) {
      return Math.floor(Math.random()*limit)
   }  

    const handleCreateHex = ()=>{
      let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
      let hexColor = '#' 
       for(let i= 0; i<6; i++ ){
        hexColor += hex[randomColorUtility(hex.length)] 
        // console.log('loop'+hexColor);
      }
      console.log(hexColor);
    setColor(hexColor)
    }

    const  handleCreateRgb =()=>{
        let r = randomColorUtility(256)
        let b = randomColorUtility(256)
        let g = randomColorUtility(256)
  
        const rbgColor = `rgb(${r},${b},${g})`
        console.log(rbgColor);
        setColor(rbgColor)
    }

    useEffect(()=>{
        typeOfColor === 'hex' ? handleCreateHex() : handleCreateRgb()
    },[typeOfColor])

    return (<div style={{
        width : '100vw',
        height : '100vh',
        textAlign : "center",
        background : color,
    }}>
        <button  onClick={()=> setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={()=> setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? 
            handleCreateHex : handleCreateRgb
         }>Generate Random Color</button>

         <div style={{
            color: "white",
            textShadow : "0px 0px 10px white",
            paddingTop : "20vh"
         }}>
          <h3>{typeOfColor === 'hex' ?  "Hex Color" :"RGB Color" }</h3>
          <h1>{color}</h1>
         </div>
        </div>)  
}