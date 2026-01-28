import useWindowResize from "."


export default function UseWindowResizeTEST(){
     const {width , height}  = useWindowResize()
     
     return(<>
        <h1>Use window resize hook</h1>
        { 
        // JSON.stringify(windowSize)
        width && height ? 
        <div>
            <h2>Width : {width}px</h2>
            <h2>Height : {height}px</h2>
        </div> 
        : null  
        }
         
    </>)
}