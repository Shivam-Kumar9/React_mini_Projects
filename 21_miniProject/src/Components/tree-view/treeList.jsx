import TreeItem from "./treeItem";


function TreeList({list =[]}) {
    // console.log("treeList",list);
  return (<ul className="menu_list">
    {
    list && list.length ? 
    list.map(item => <TreeItem item={item} /> )
    : null 
    }
  </ul>
  )
}

export default TreeList