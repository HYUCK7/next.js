import { createSlice } from "@reduxjs/toolkit";

const initialState = {}
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {}
})

export default todoSlice.reducer