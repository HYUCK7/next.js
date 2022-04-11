import {createStore} from 'redux'
import { createWrapper, HYDRATE} from 'next-redux-wrapper'

const reducer = (state, action) => {
    switch (action.type){
        case HYDRATE:
            return {...state, ...action.payload}
        default:
            return state
    }
}

const makeStore = context => createStore(reducer)

export const wrapper = createWrapper(makeStore, {debug : true})