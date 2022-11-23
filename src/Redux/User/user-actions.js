import * as userActionType from './user-type'

export const userLogin=(data)=>{
    return{
        type:userActionType.LOGIN,
        payload:data
    }
}

export const userLogOut=()=>{
    return{
        type:userActionType.LOGOUT,
    }
}