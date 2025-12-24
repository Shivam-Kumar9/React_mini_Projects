import { useState } from "react"
import './tab.css'
export default function Tabs({tab_content, onChange}){
   const [currentTab , setCurrentTab] = useState(0)
   console.log(tab_content);
   function handleTab(currentIndex){
    setCurrentTab(currentIndex)
    onChange(currentIndex)
   }
    return(<div className="tab_wrapper">
        <div className="tab_head">

             {tab_content.map((tabItem,i)=><div 
             className={`tab_title  ${i  === currentTab?'activeTab':'' }`}
             onClick={()=>handleTab(i)}
             key={tabItem.label}>
                <span>{tabItem.label} </span>
             </div>)}
        </div>

        <div className="tab_content">
            {tab_content[currentTab] && tab_content[currentTab].content}
        </div>
    </div>)
}