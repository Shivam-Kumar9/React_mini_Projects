import { useRef } from "react"


const data = [ 
   {
       label : 'First Card',
       style : {
           width : '100%',
           height : '600px',
           background : "green"
       }
   },
  {
       label : 'Second Card',
       style : {
           width : '100%',
           height : '600px',
           background : "tomato"
       }
   },
    {
       label : 'Third Card',
       style : {
           width : '100%',
           height : '600px',
           background : "orange"
       }
   },
    {
       label : 'Four Card',
       style : {
           width : '100%',
           height : '600px',
           background : "yellow"
       }
   },
    {
       label : 'Five Card',
       style : {
           width : '100%',
           height : '600px',    
           background : "#0080ff"
       }
   
   },
]
export default function ScrollTo_Section() {
   const Hookref = useRef(null)
    
   const handleScrollToSection = ()=>{
      let pos   =  Hookref.current.getBoundingClientRect().top
      window.scrollTo({
        top: pos,
        behavior :'smooth',
      })
   }  

    return(
        <>
         <h1>scroll to  particular section</h1>
         <button onClick={handleScrollToSection}>scroll to ...</button>
         {
            data.map((item ,i)=>(
            <div  ref={ i === 1 ? Hookref :null }
             key={i}
             style={item.style}>
                {item.label}
            </div>))
         }
        </>
    )
}


/*
3. Measuring the Distance
When you click the button, handleScrollToSection runs.

getBoundingClientRect().top: This is the "magic" part. It calculates the distance (in pixels) from the current viewport top to the top of your target element.

The Gotcha: This value is relative to where you are currently standing on the page, not the absolute top of the document.

4. Executing the Move
window.scrollTo takes that measurement and moves the scrollbar. By setting behavior: 'smooth', you get that polished sliding effect instead of an instant, jarring jump.

⚠️ A Small "Bug" to Watch Out For
There is a subtle logic error in your current snippet that might bite you if you scroll down a little bit before clicking the button:

getBoundingClientRect().top gives you the distance from the top of the screen, not the top of the page.

If you are already at the very top of the page, it works perfectly.

If you have already scrolled down 100px, scrollTo will be "off" by that amount.
*/  