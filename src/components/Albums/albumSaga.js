import { spawn ,call , put , take} from "@redux-saga/core/effects";
import { 
    // addAlbum, 
    // deleteAlbum, 
    // editAlbum, 
    // loadAlbum, 
    // setError, 
    // setLoading, 
    // updateAlbum 
} from "./albumAction";

import { 
    addAlbum,
    loadAlbum,
    setError,
    deleteAlbum,
    editAlbum,
    updateAlbum,
    setLoading,
} from "./albumSlice";

import { deleteAlbumsApi,  editAlbumApi,  getAlbumsApi , postAlbumsApi } from "./albumService";

function* fetchAlbumSaga(){
    try {
        const response = yield call(getAlbumsApi)

        const data = response.data

        yield put(loadAlbum(data))
        yield put(setLoading(false))
    } catch (error) {
        yield put(setError(error))   
    }
}

function* addAlbumSaga(){
   while(true){
        const action = yield take('ADD_ALBUM_EVENT')
        
        const response = yield call(postAlbumsApi , action?.payload)
        
        if(response.status === 201){
            yield put(addAlbum(response.data))
        }else{
            yield put(setError(response))
        }
    } 
}

function* deleteAlbumSaga(){
    while(true){
        const action = yield take('DELETE_ALBUM_EVENT')
        
        const response = yield call(deleteAlbumsApi , action?.payload)
        
        if(response.status === 204){
            yield put(deleteAlbum(action.payload))
        }else{
            yield put(setError(response))
        }
    }
}

function* editAlbumSaga(){
    while(true){
        const action = yield take('EDIT_ALBUM_EVENT')

        yield put(editAlbum(action.payload))
    }
}

function* updateAlbumSaga(){
    while(true){
        const action = yield take('UPDATE_ALBUM_EVENT')

        const response = yield call(editAlbumApi , action?.payload )
        
        if(response.status === 201){
            yield put(updateAlbum(action.payload))
        }else{
            yield put(setError(response))
        }
    }
}

export default function* albumSaga(){
    // console.log('inside album saga')

    yield spawn(fetchAlbumSaga)
    yield spawn(addAlbumSaga)
    yield spawn(deleteAlbumSaga)
    yield spawn(editAlbumSaga)
    yield spawn(updateAlbumSaga)
}