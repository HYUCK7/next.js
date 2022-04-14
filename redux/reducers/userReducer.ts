import { createSlice } from "@reduxjs/toolkit";

export interface JoinPayload{
    data: {
        user:{  userid: string,
                name: string,
                password: string,
                email: string,
                phone: string,
                birth: string,
                address: string

        }
    }
} 

/*export const UserDataPayload = {
    id : String,
    password: String,
    name: String,
    tel: String
}*/
//state
export interface UserState{
    userLoading: boolean
    userData: any
    error: null
    token: null
}

const initialState: UserState = {
    userLoading: false,
    userData: null,
    error: null,
    token: null
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state,action){state.userLoading = true,state.error = null},
        joinSuccess(state,action){state.userLoading = false,state.error = action.payload},
        joinFailure(state,action){state.userLoading = false,state.error = action.payload}
    }
})
const {reducer, actions} = userSlice

export const {
    joinRequest, joinSuccess, joinFailure
} = actions

export default reducer