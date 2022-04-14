import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const boardSlice = createSlice({
    name:'boards',
    initialState,
    reducers:{
        addTitle: (state, action) => {
            alert('리듀서 내부로 들어온 제목?' + action.payload.title)
            const board = {id : new Date(), title: action.payload.title}
            state.push(board)
        }
    }
})
export const {addTitle} = boardSlice.actions
export default boardSlice.reducer