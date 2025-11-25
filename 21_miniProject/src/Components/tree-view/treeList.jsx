import TreeItem from "./treeItem";


 
function TreeList({list =[]}) {
    console.log("treeList",list);
  return (<div>
    {
    list && list.length ? 
    list.map(item => <TreeItem item={item} /> )
    : null
    }
  </div>
  )
}

export default TreeList