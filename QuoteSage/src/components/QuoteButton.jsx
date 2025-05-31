import  { useEffect } from 'react'

function QuoteButton({getQuote ,loading}) {

// disabled={loading}
  return (
     <div className="button-container">
       <button onClick={()=>{getQuote()}}  className='q_btn'>
          {
          loading ? 
           (<>
            <div className='spinner'></div>
            Getting Quote...
           </>)
          :('Get New Quote')
         }
       </button>
     </div>  
  )
}

export default QuoteButton

