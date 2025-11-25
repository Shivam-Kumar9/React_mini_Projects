import TreeList from "./treeList"



function TreeItem({item}) {
    // console.log(menu[0].label);
    // console.log("treeItem",item);
    return <ul>
        <li>{item.label}</li>
         {item 
         && item.children 
         && item.children.length >0 
         ? <TreeList list={item.children}/>
         : null
        }
        
        
    </ul>
}

export default TreeItem