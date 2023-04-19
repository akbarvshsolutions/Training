import { spawn ,call , put , take} from "@redux-saga/core/effects";
import { fetchUserRatingApi, updateUserRatingApi } from "./userRatingService";
import { 
    // selectUser, 
    // setUserRating, 
    // updateUserRating ,
} from "./userRatingAction";

import { 
    selectUser,
    setUserRating,
    updateUserRating
} from "./userRatingSlice";

function* fetchUserRatingSaga(){
    while(true){
        const action = yield take('SELECT_USER_RATING_EVENT')
        // console.log('action ',action)
        const response = yield call(fetchUserRatingApi,action?.payload)
        
        console.log('response ',response)
        if(response.status === 200){
            yield put(selectUser(action?.payload))
            yield put(setUserRating(response.data))
        }
    }
}

function* addUserRatingSaga(){
    while(true){
        const action = yield take('UPDATE_USER_RATING_EVENT')
        
        const response = yield call(updateUserRatingApi,action?.payload)
        
        if (response.status === 201) {
            yield put(updateUserRating(action.payload));
        }
    }
}

export default function* userRatingSaga(){
    console.log('inside user rating')

    yield spawn(fetchUserRatingSaga)
    yield spawn(addUserRatingSaga)
}