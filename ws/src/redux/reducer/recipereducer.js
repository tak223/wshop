import { GETRECIPEFALE, GETRECIPEFALEONE, GETRECIPELOADING, GETRECIPELOADINGONE, GETRECIPESUCSESS, GETRECIPESUCSESSONE } from "../actiontypes";

const inistate ={
   Recipes:[] ,
   loading:false,
   error:null,
   onerecipe:{}

}
export const recipereducer = (state=inistate, {type,payload}) => {
  switch (type) {
      case GETRECIPELOADING: return {...state,loading:true};
      case GETRECIPESUCSESS: return {...state,loading:false,Recipes:payload} 
      case GETRECIPEFALE: return {...state, loding : false,error:payload}
      case GETRECIPELOADINGONE: return {...state,loading:true};
      case GETRECIPESUCSESSONE: return {...state,loading:false,onerecipe:payload} 
      case GETRECIPEFALEONE: return {...state, loding : false,error:payload}

      default:return state;
        
  }

 }