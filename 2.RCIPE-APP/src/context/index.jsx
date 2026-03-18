import { createContext, useState } from "react";

export const GlobalContext = createContext()


export default function GlobalState({children}){
   const [loading, setLoading] = useState(false) 
   const [searchParam, setSearchParam] = useState('')
    const [recipeList, setRecipeList] = useState([])    
    const [recipeDetailsData, setRecipeDetailsData] = useState(null)
    const  [favoriteList, setFavoriteList] = useState([])
    async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)
    try {
        const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchParam}`)
        const data = await res.json()
        if(data?.data?.recipes){
            setRecipeList(data?.data?.recipes)
        }
        // console.log(data);
    } catch (error) {
        console.log(error); 
    }
    finally{
        setSearchParam('')
        setLoading(false)
    }
  }

  function handleAddToFavorite(curr_item){
    // console.log(curr_item,'cuurrent item');
    let updatedList = [...favoriteList]
    const index = favoriteList.findIndex(item=> item.id === curr_item.id)
    if(index === -1){
        updatedList.push(curr_item)
    }
    else{
        updatedList.splice(index,1)
    }
    setFavoriteList(updatedList)
    console.log(updatedList,'cpyFav');
   } 
  
   return(
        <GlobalContext.Provider value={{favoriteList, handleAddToFavorite,  searchParam, setSearchParam,handleSubmit ,loading, recipeList,recipeDetailsData, setRecipeDetailsData}}>
         {children} 
        </GlobalContext.Provider>
    )
}