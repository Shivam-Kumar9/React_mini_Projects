import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
 import { GlobalContext } from '../../context'
function Details() {
     const  param = useParams();
      // console.log(param,'details');
       const {recipeDetailsData, setRecipeDetailsData ,handleAddToFavorite,favoriteList} = useContext(GlobalContext)
    
       useEffect(()=>{
        async function fetchDetails(){
          try {
            const  res= await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${param.id}`)
            const data = await res.json() 
            // console.log(data);
            setRecipeDetailsData(data?.data?.recipe)

          } catch (error) {
            console.log(error);
          }
        } 
       fetchDetails()
      }, [])
      // console.log(recipeDetailsData);
       return (
    <div className='container mx-auto py-10 grid-cols-1 lg:grid-cols-2 gap-10'>
      <div className='row-start-2 lg:row-start-auto'>
          <div className='h-96 overflow-hidden rounded-xl group'>
              <img src={recipeDetailsData?.image_url} alt="" 
              className='w-full h-full object-cover block group-hover:scale-105  duration-300'/>
             </div>
      </div>
       <div className='flex flex-col gap-3' >
        <span className='text-sm text-cyan-700 font-medium'>
          {recipeDetailsData?.publisher}
        </span>
        <h3 className='font-bold text-2xl truncate text-black'>
          {recipeDetailsData?.title}
        </h3>
         <div>
          <button onClick={(()=>handleAddToFavorite(recipeDetailsData))}  className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'>{favoriteList && favoriteList.length >0 && favoriteList.findIndex(item=> item.id === recipeDetailsData?.id) !== -1 ? 'Remove from favorites' : 'Save as favorite' }</button>
         </div>
  
         <div>
          <span className='text-2xl font-semibold text-black'>Ingredients:</span>
          <ul className='flex flex-col gap-3'>
            {recipeDetailsData?.ingredients.map(ingredient=> <li>
              <span className='text-2xl font-semibold text-black'>{ingredient.quantity} {ingredient.unit} - </span>
              <span className='text-2xl font-semibold text-black'>{ingredient.description}</span>
            </li>)}
          </ul>
         </div>
       </div>
      
    
    </div>
  )
}  

export default Details