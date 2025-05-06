import React from 'react'

function Loading() {
  return (
    <div 
    className='flex justify-center items-center h-full  border-2 border-dotted '
     >
       <div className='animate-spin border-t-transparent border-4 w-10 h-10 scale-250 rounded-full border-red-300'></div>
    </div>
  )
}

export default Loading
