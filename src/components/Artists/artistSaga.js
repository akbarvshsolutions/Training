import { spawn ,call , put , take} from "@redux-saga/core/effects";
import { deleteArtistApi, editArtistApi, getArtist, postArtist } from "./artistService";
import { 
    // addArtist,
    // deleteArtist, 
    // editArtist, 
    // loadArtists, 
    // setError, 
    // setLoading, 
    // updateArtist 
} from "./artistsAction";

import { 
    addArtist,
    loadArtists,
    setLoading,
    setError,
    deleteArtist,
    editArtist,
    updateArtist
} from "./artistSlice";

function* fetchArtistsSaga(){
    try {
        const response = yield call(getArtist)

        const data = response.data;
        
        yield put(loadArtists(data))
        yield put(setLoading(false))
    } catch (error) {
        yield put(setError(error))
    }
}

function* addArtistSaga(){
    while(true){
        //Added event listner
        const action = yield take('ADD_ARTIST_EVENT')

        //api call
        const response = yield call(postArtist,action?.payload)

        if(response.status === 201){
            yield put(addArtist(response.data))
        }else{
            yield put(setError(response))
        }
    }
}

function* deleteArtistSaga(){
    while(true){
        //delete event listner
        const action = yield take('DELETE_ARTIST_EVENT')
        
        const response = yield call(deleteArtistApi , action.payload)

        if(response.status === 204){
            yield put(deleteArtist(action.payload))
        }else{
            yield put(setError(response))
        }
    }
}


function* editArtistSaga(){
    while(true){
        const action = yield take('EDIT_ARTIST_EVENT')

        yield put(editArtist(action?.payload))
    }
}


function* updateArtistSaga(){
    while(true){
        const action = yield take('UPDATE_ARTIST_EVENT')

        const response = yield call(editArtistApi,action.payload)

        if(response.status === 201){
            yield put(updateArtist(action.payload))
        }else{
            yield put(setError(response))
        }
    }
}

export default function* artistSaga(){
    // console.log('inside artist saga')

    yield spawn(fetchArtistsSaga)
    yield spawn(addArtistSaga)
    yield spawn(deleteArtistSaga)
    yield spawn(editArtistSaga)
    yield spawn(updateArtistSaga)
}