import { spawn, call, put, take } from "@redux-saga/core/effects";
import { deleteUserApi, getUsers, postUsers, updateUserApi } from "./userService";
import {
    // addUser, 
    // deleteUser, 
    // editUser, 
    // loadUsers, 
    // setError, 
    // setLoading, 
    // updateUser
} from "./userActoin";

import { loadUsers, setLoading, setError, addUser, deleteUser, editUser , updateUser} from "./userSlice";

function* fetchUserSaga() {
    try {
        const response = yield call(getUsers)
        const data = response.data;

        yield put(loadUsers(data))
        yield put(setLoading(false))
    } catch (error) {
        yield put(setError(error))
    }
}

function* addUserSaga() {
    while (true) {
        //added event listner
        const action = yield take('ADD_USER_EVENT')

        //api call
        const response = yield call(postUsers, action?.payload)

        if (response.status === 201) {
            yield put(addUser(response.data));
        } else {
            yield put(setError(response))
        }
    }
}

function* deleteUserSaga() {
    while (true) {
        //delete event listner
        const action = yield take('DELETE_USER_EVENT')

        const response = yield call(deleteUserApi, action.payload)
        //dispatch into store
        if (response.status === 204) {
            yield put(deleteUser(action.payload))
        } else {
            yield put(setError(response))
        }
    }
}

function* editUserSaga() {
    while (true) {
        //Edit event listner
        const action = yield take('EDIT_USER_EVENT')

        yield put(editUser(action?.payload))
    }
}

function* updateUserSaga() {
    while (true) {
        //Update event listner
        const action = yield take('UPDATE_USER_EVENT')
        console.log('action', action)
        const response = yield call(updateUserApi, action.payload)

        if (response.status === 201) {
            yield put(updateUser(action.payload))
        } else {
            yield put(setError(response))
        }
    }
}

export default function* userSaga() {
    // console.log('usersaga callled')

    yield spawn(fetchUserSaga);
    yield spawn(addUserSaga)
    yield spawn(deleteUserSaga)
    yield spawn(editUserSaga)
    yield spawn(updateUserSaga)
}