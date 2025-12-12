import { useState } from "react"
import TreeList from "./treeList"
import { FaMinus ,FaPlus } from "react-icons/fa";


function TreeItem({item}) {
    // console.log(menu[0].label);
    // console.log("treeItem",item);
    let  [showChildren,setShowChildren]  = useState({});
    const handleToggleChildren = (label)=>{
        let  newShowchildren = { ...showChildren, [label] : !showChildren[label]}
      setShowChildren( newShowchildren)
    }

    console.log(showChildren);
    
    return( 
        <li >
            <div className="menu_item">
                <p>{item.label}</p>
               {item.children && item.children.length>0 && <span onClick={()=>handleToggleChildren(item.label)}>
                {showChildren[item.label] ?  <FaMinus color='#fff' size={24}/> :<FaPlus color='#fff' size={24}/>}
                </span>}
           </div>
           {item 
         && item.children 
         && item.children.length>0
         && showChildren[item.label]
         ? <TreeList list={item.children}/>
         : null
         }
        </li>)
    
        }

export default TreeItem