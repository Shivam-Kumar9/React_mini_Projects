import React, { useContext } from 'react'

import LightDarkMode from '../light_dark_mode'
import Accordian from '../accordian'
import TreeView from '../tree-view'   
import TicTactToe from '../tic_tact_toe'
import { FeatureFlagContext } from './context/flag.context'
import Menu from '../tree-view/data'
import RandomColor from '../random_color'
function FeatureFlags() {
/*
  showLightAndDarkMode : true,
    showTicTacToe : true,
    showAccordian : false,
    showTreeView : false,
    showTabs : false,
*/ 
 const {loading,enabledFlags } = useContext(FeatureFlagContext) 

const ComponentsToRender =[
    {
        key: 'showLightAndDarkMode',
        component :  <LightDarkMode/>
    },{
        key: 'showTicTacToe',
        component : <TicTactToe/>
    },{
        key: 'showAccordian',
        component :<Accordian/>
    },{
        key: 'showTreeView',
        component : <TreeView menu={Menu}/>
    },{
        key: 'showRandomColor',
        component : <RandomColor/>
    }
]

 if(loading) return <h1>Loading Feature Flags...</h1>

  return (
    <div>
        <h1>Feature Flags</h1>
        {ComponentsToRender.map((item,i)=>
             enabledFlags[item.key] ? item.component :null
        )}
    </div>
  )
}

export default FeatureFlags