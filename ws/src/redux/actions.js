import axios from "axios";
import { GETRECIPEFALE, GETRECIPEFALEONE, GETRECIPELOADING, GETRECIPELOADINGONE, GETRECIPESUCSESS, GETRECIPESUCSESSONE } from "./actiontypes"

export const getrecipe = (query) => async(dispatch)=>{
dispatch({type: GETRECIPELOADING });
try {
    const res = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=c7081841&app_key=%20854d3b8c6808b4d74535e9a1cd5844d4%09`
           );
           console.log(res);
           dispatch({type: GETRECIPESUCSESS ,payload:res.data.hits});
        
    
} catch (error) {
    dispatch({type:GETRECIPEFALE ,payload:error});
}
}
export const getonerecipe = (id) => async(dispatch)=>{
    dispatch({type: GETRECIPELOADINGONE });
    try {
        const res = await axios.get(
            `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=c7081841&app_key=%20854d3b8c6808b4d74535e9a1cd5844d4%09`
               );
               console.log(res);
               dispatch({type: GETRECIPESUCSESSONE ,payload:res.data.recipe});
            
        
    } catch (error) {
        dispatch({type:GETRECIPEFALEONE ,payload:error});
    }
    }