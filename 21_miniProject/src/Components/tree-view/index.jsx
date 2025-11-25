import TreeItem from './treeItem';

 

export default  function TreeView({menu =[] }){
//   console.log(menu); 
    return <div className='main_menu'>
         {/* {JSON.stringify(menu)} */}
        {
            menu.length > 0 ? 
            menu.map(item=> <TreeItem item={item}/>)
            : null
        }
    </div>
 }