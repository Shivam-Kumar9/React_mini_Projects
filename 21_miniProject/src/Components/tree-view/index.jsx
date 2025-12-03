import TreeItem from './treeItem';
import './style.css'
 

export default  function TreeView({menu =[] }){
//   console.log(menu);
    return <div className='tree_view'>
         {/* {JSON.stringify(menu)} */}
        {
            menu.length > 0 ? 
            menu.map(item=> <TreeItem item={item}/>)
            : null
        }
    </div>
 }