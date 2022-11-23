import * as userActionType from './user-type'

const initialState={
    user:null
}
const userReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case userActionType.LOGIN:
            return{...state,user:payload}
        case userActionType.LOGOUT:
            return{...state,user:null}
        default:
            return state
    }
}
export default userReducer