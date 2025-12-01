import { useState } from "react"
import TreeList from "./treeList"



function TreeItem({item}) {
    // console.log(menu[0].label);
    // console.log("treeItem",item);
    let  [isChildren,setIsChildren]  = useState({});
    const handleToggle = (label)=>{
        
    }
    return <ul>
           <li>{item.label}</li><span onClick={handleChildren}>+</span>
         {item 
         && item.children 
         && item.children.length>0 
         ? <TreeList list={item.children}/>
         : null
        }
        
    </ul>
}

export default TreeItem