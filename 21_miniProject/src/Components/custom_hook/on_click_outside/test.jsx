import { useRef, useState } from "react"
import useCustomOutSideClick from "."




export default function UseClickOutsideTest(){
    const [ showContent, setShowContent] = useState(false)
    const refDiv = useRef(null)
    useCustomOutSideClick(refDiv,  ()=>setShowContent(false) )
    return<div>
       <h2> Testing Custom Hook : useClickOutside </h2>
       {showContent ? 
        <div ref={refDiv} style={{border:'1px solid'}}>
         <h1>This is mimic of modal </h1>
         {/* <small>{setTimeout(()=>(JSON.stringify(refDiv)),1000)}wqem</small> */}
         <p>Click outside of this content to close this , if you click click inside then it won't close.</p>
       </div>
        :
        <button onClick={()=>setShowContent(true)}> show content</button>
        }
    </div>
}