
import useLocalStorage from './useLocalStorage'
import './theme.css'

export default function LightDarkMode() {
     
    const [theme ,setTheme] = useLocalStorage('21theme', 'light')
     
     const handleToggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark' : "light")
     }

    return(
        <div className="light_dark_mode" data_theme ={theme}>
            <div className="container_theme">
              <p>Hello {theme} world !</p>
              <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
             
        </div>
    )

}