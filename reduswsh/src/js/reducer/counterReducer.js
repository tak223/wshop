import { DECRIMENT, INCRIMENT } from './../actionTypes/actionTypes';


export const initialState ={

    count :0,
}
export const countReducer = ( state = initialState ,action )=>
{
    switch (action.type) {
        case INCRIMENT: return {...state,count:state.count+1}
        case DECRIMENT: return {...state,count: state.count&&state.count-1}
            
    
        default: return state;
    }
}