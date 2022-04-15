import { all } from 'redux-saga/effects'
import { watchJoin } from './userSaga'
import { watchTodo } from './todoSaga'

export default function* rootSaga() {
    yield all([watchJoin(), watchTodo()])
}