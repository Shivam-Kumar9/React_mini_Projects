

import React from 'react'

function Suggest({data , setSuggest , setDropdown}) {
  const handleSuggest = (e) => {
    setSuggest(e.target.innerText);
    setDropdown(false);
  }
  return ( 
    <ul>
      {data && data.length >0 ? 
       data.map((list,i) =>
         <li key={i} onClick={handleSuggest}>
         {list }
        </li>)
        :null
      }
    </ul>
  )
}

export default Suggest 