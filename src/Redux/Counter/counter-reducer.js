import * as counterTypes from './counter-type'

const INITIALSTATE={
    counter:0
}

const counterReducer=(state=INITIALSTATE,{type,payload})=>{
    switch(type){
        case counterTypes.INCREMENT:
            return{...state,counter:state.counter+1}
        case counterTypes.DECREMENT:
            return{...state,counter:state.counter-1}
        default:
            return state
    }
}

export default counterReducer