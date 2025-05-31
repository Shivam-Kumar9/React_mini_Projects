import { useState ,useEffect,  } from 'react'
import './App.css'

import QuoteCard from './components/QuoteCard'
import QuoteButton from './components/QuoteButton'
import useFetchQuote from './hook/FetchQuote'
import ThemeBtn from './components/Theme'

function App() {
  const [storeQuote, getQuote , loading ,error] = useFetchQuote()
  //  console.log(storeQuote)
  // console.log(error)
  const [theme,setTheme ] = useState(()=>{
    let savedtheme = localStorage.getItem('theme') || 'light'
    return savedtheme 
  })
  

  const toggleTheme = ()=>{
    let newtheme = theme === 'dark'? 'light' : 'dark' 
    setTheme(newtheme)
    localStorage.setItem('theme',newtheme)
  }

    useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className={`app ${ theme === 'dark'? 'light' : 'dark' }`}>
       <div className="container">
          <div className="header">
            <h1>QuoteSage</h1>
            <p>~ A Daily Quote Generator</p>
          </div>
       </div>
      <ThemeBtn toggleTheme={toggleTheme} theme={theme}/>  
      <QuoteCard  data={storeQuote} error={error} />
      <QuoteButton getQuote={getQuote}  loading={loading}/>
    </div>
  )
}

export default App
