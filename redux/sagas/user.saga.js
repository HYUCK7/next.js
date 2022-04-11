import { PayloadAction } from "@reduxjs/toolkit";
import { call, deplay, put, takeLatest } from 'redux-saga/effects'

import {
    joinPayload, joinRequest, joinSuccess, joinFailure
} from '../reducers/user.reducer'

function* join(action){
    try{
        alert('*** saga내부-join성공 ***')
        const result = yield call(userAPI.join, action.payload)
        yield put(joinSuccess(result))
        window.location.href = 'user/login'
    }catch(error){
        alert('*** saga내부-join실패 ***')
        yield put(joinFailure(error))
    }
}
export function* watchJoin(){
    yield takeLatest(joinRequest.type, join)
}
