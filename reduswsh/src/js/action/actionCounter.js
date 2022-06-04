import {DECRIMENT, INCRIMENT  } from "../actionTypes/actionTypes";

export const incrimentCounter = () =>
 { 
 return {  
      type : INCRIMENT,
    
}
 
}
export const decrimentCounter = () =>
 { 
 return {  
      type : DECRIMENT,
    
}
 
}