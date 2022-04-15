import { call, delay, put, takeLatest} from 'redux-saga/effects'
import { postTodo } from '../api/todoApi'
import { TodoActions } from '../../redux/reducers/todoReducer';

interface UserTodoType{
    type: string;
    payload: {
        userid: string, task: string, completed: string
    }
}
interface UserTodoSuccessType{
    type: string;
    payload: {
        userid: string
    }
}
function* todo(todo: UserTodoType){
    try{
        alert('진행 3: Saga 내부 진입 성공' + JSON.stringify(todo))
        const response: UserTodoSuccessType = yield postTodo(todo.payload)
        yield put(TodoActions.taskSuccess(response))
       
    }catch(error){
        alert('진행 3: Saga 내부 진입 실패')
        yield put(TodoActions.taskFailure(error))
    }
}
export function* watchTodo(){
    yield takeLatest(TodoActions.taskRequest, todo)
}