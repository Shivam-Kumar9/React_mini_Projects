import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [results, setResults] = useState([])
  const [showResults,setShowResults] = useState(false)
  const [cache,setCache] = useState({})

  const fetchData = async()=>{
    if(cache[input]){
      setResults(cache[input])
      console.log('cache return  '+input)
      return;
    }

    console.log('API CALL '+input)
    const data  = await fetch(`https://dummyjson.com/recipes/search?q=`+input)
    const json = await data.json()
    setResults(json?.recipes)
    setCache(prev=>({ ...prev,[input]: json?.recipes}))
    // console.log(json)
  }
//  console.log( cache)
useEffect(() => {
 const timer = setTimeout(fetchData,400)

 return ()=>{
  clearTimeout(timer)
 }
}, [input]);

  return (
    <div className='App'>
   <h1>Autocomplete Search Bar</h1>

   <div>
    <pre>{JSON.stringify(input,null,2)}</pre>
      <input value={input} 
      onChange={(e)=>setInput(e.target.value)} 
      onFocus={()=>setShowResults(true)}
      onBlur={()=>setShowResults(false)}
      type="text" name="" className='search-input'/>
      
   {showResults && input.length>0  && 
      <div className='results_box'>
        {
          results.map(r =>
          <span className='result' key={r.id}>{r.name}</span>)
        }
      </div>}  
      
   </div>

    </div>
  )
}

export default App
