import React from 'react'
import { useSelector } from 'react-redux'
import RecipeCart from './RecipeCart'

const ListRecipe = ({recipes}) => {
    const recipesRedux = useSelector((state)=>state.recipereducer.Recipes);
    console.log(recipesRedux);

  return (
    <div style={{display :'flex', flexWrap: 'wrap',justifyContent:'space-around'}}>
        { recipesRedux.map((el,i)=><RecipeCart key={i} el={el}/>)}

   {/* {recipes.map((el,i)=><RecipeCart key={i} el={el}/>)} */}
    </div>
  )
}

export default ListRecipe