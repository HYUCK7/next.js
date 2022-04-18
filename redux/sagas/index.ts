import { all } from 'redux-saga/effects'
import { watchJoin } from './userSaga'
import { watchTodo } from './todoSaga'
import { watchArticle } from './articleSaga'

export default function* rootSaga() {
    yield all([watchJoin(), watchTodo(), watchArticle()])
}