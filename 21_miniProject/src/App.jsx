import { useState } from 'react'
import './App.css'
import Accordian from './Components/accordian'
import RandomColor from './Components/random_color'
import StarRating from './Components/star_rating'
import ImageSlider from './Components/image-slider'

function App() {
 

  return (
    <>
       {/* Accordian */}
       {/* <Accordian/> */}

       {/* color change  */}
       {/* <RandomColor/> */}

       {/* rating star */}
       {/* <StarRating/> */}

      {/* Image slider component */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>
    </>
  )
}

export default App
