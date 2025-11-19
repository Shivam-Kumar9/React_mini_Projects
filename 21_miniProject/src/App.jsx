import { useState } from 'react'
import './App.css'
import Accordian from './Components/accordian'
import RandomColor from './Components/random_color'
import StarRating from './Components/star_rating'
import ImageSlider from './Components/image-slider'
import LoadMoreData from './Components/load_more_data'
import TreeView from './Components/tree-view'
import Menu from './Components/tree-view/data'

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
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/> */}
   
       {/*load more data  */}
       {/* <LoadMoreData/> */}

       {/* recursive  Treeview  menu */}
       <TreeView menu={Menu}/>
    </>
  )
}

export default App
