import { all } from 'redux-saga/effects'
import { watchJoin, watchLogin } from './userSaga'
import { watchTodo } from './todoSaga'
import { watchArticle } from './articleSaga'
//import { watchLogin } from './loginSaga'

export default function* rootSaga() {
    yield all([watchJoin(), watchTodo(), watchArticle(), watchLogin()])
}