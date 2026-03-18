import React from 'react'
import { useContext } from 'react'  
import { GlobalContext } from '../../context'
import RecipeList from '../../components/recipe-list'

function Home() {

const {loading, recipeList} = useContext(GlobalContext) 
  // console.log(recipeList,'home');

  if(loading) return <h2 className='text-center text-3xl font-semibold'>Loading...</h2>
  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
   recipeList && recipeList.length > 0 ? 
    recipeList.map(item=> <RecipeList  item ={item} /> )   
   : (<div>
    <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>
      Nothing to show . Please search for some recipe.
    </p>
   </div>)
      }
    </div>
  )
}
export default Home