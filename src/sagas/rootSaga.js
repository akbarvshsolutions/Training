import { spawn } from "@redux-saga/core/effects";
import userSaga from "../components/users/userSaga";
import artistSaga from "../components/Artists/artistSaga";
import albumSaga from "../components/Albums/albumSaga";
import userRatingSaga from "../components/UserRating/userRatingSaga";

export default function* rootSaga(){
    console.log('Root saga is called')

    yield spawn(userSaga)
    yield spawn(artistSaga)
    yield spawn(albumSaga)
    yield spawn(userRatingSaga)
}