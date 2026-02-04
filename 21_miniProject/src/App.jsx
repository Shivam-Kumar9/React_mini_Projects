import { useState } from 'react'
import './App.css'
// import Accordian from './Components/accordian'
// import RandomColor from './Components/random_color'
// import StarRating from './Components/star_rating'
// import ImageSlider from './Components/image-slider'
// import LoadMoreData from './Components/load_more_data'
// import TreeView from './Components/tree-view'
// import Menu from './Components/tree-view/data'
// import QRcode from './Components/qr_code_generator/QRcode'
// import LightDarkMode from './Components/light_dark_mode'
// import ScrollIndicator from './Components/scroll_indicator'
// import TabTest from './Components/custom_tabs/tab_test'
import Modal_test from './Components/modal/modal_test'
import GithubProfileFinder from './Components/github_profile_finder'
import SearchAutoComplete from './Components/search_autoComplete'
import TicTactToe from './Components/tic_tact_toe'
import FeatureFlagGlobalState from './Components/feature_flag/context/flag.context'
import FeatureFlags from './Components/feature_flag'
import Test_custom_hook from './Components/custom_hook/use_fetch/test'
import UseClickOutsideTest from './Components/custom_hook/on_click_outside/test'
import UseWindowResizeTEST from './Components/custom_hook/use_window_click/test.'
import ScrollTo_TopBottom from './Components/scroll_to_top'

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
       {/* <TreeView menu={Menu}/> */}

       {/* QR code generator */}
       {/* <QRcode/> */}

       {/* Theme light -- dark */}
       {/* <LightDarkMode/> */}

       {/* scroll indicator */}
       {/* <ScrollIndicator url={`https://dummyjson.com/products?limit=200`}/> */}

       {/* custom tab no extra library */}
       {/* <TabTest /> */}

       {/* custom modal */}
       {/* <Modal_test/> */}

       {/* github profile finder */}
       {/* <GithubProfileFinder/> */}

       {/* SearchAutoComplete */}
       {/* <SearchAutoComplete/> */}

       {/* Tic Tac Toe */}
       {/* <TicTactToe/> */}

       {/* feature flag */}
           {/* <FeatureFlagGlobalState>
               <FeatureFlags/>
           </FeatureFlagGlobalState> */}

       {/* Custom hook */}
         {/* <Test_custom_hook/> */}
         {/* <UseClickOutsideTest/> */}
         {/* <UseWindowResizeTEST/> */}

       {/* ScrollTo_TopBottom */}
       <ScrollTo_TopBottom />
    </>
  )
}

export default App
