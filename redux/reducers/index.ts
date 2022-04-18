import { combineReducers } from "redux";
import adminReducer from './adminReducer'
import basicReducer from './basicReducer'
import articleReducer from './articleReducer'
import gameReducer from './gameReducer'
import todoReducer from './todoReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    adminReducer,
    basicReducer,
    articleReducer,
    gameReducer,
    todoReducer,
    userReducer
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>