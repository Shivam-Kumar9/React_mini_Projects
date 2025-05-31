import React, { useState } from 'react'

function ThemeBtn({toggleTheme, theme}) {
    
  return (
     <button className="theme-toggle" onClick={toggleTheme}>{theme ==='dark'?"🌙":"☀️"}</button>
  )
}

export default ThemeBtn
