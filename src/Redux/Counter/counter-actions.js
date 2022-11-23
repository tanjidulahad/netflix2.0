import * as counterTypes from './counter-type'

export const increment=()=>{
    return{
        type:counterTypes.INCREMENT
    }
}
export const decrement=()=>{
    return{
        type:counterTypes.DECREMENT
    }
}