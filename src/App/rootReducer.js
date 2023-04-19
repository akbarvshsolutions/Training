import { combineReducers } from "redux";
// import userReducer from "../components/users/userReducer";
import userSlice from "../components/users/userSlice";
// import artistReducer from "../components/Artists/ArtistReducer";
import artistSlice from "../components/Artists/artistSlice";
// import albumReducer from "../components/Albums/albumReducer";
import albumSlice from "../components/Albums/albumSlice";
// import userRatingReducer from "../components/UserRating/userRatingReducer";
import userRatingSlice from "../components/UserRating/userRatingSlice";


const rootReducer = combineReducers({
    user : userSlice,
    artist : artistSlice,
    album : albumSlice,
    // userRating : userRatingReducer,
    userrating : userRatingSlice,
});
  
export default rootReducer;
  