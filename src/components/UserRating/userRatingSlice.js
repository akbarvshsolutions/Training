import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedUser : '',
    userRatings : [] ,
    isLoading : true ,
    error : {} ,
}

const userRatingSlice = createSlice({
    name : 'userRatingSlice',
    initialState,
    reducers : {
        selectUser : (state,action) => {
            state.selectedUser = action.payload
        },
        setUserRating : (state,action) => {
            state.userRatings = action.payload
        },
        updateUserRating : (state,action) => {
            console.log(action.payload) 
            const result = state.userRatings.some(
                (userRating) =>
                  Number(userRating?.userId) === action.payload.userId &&
                  Number(userRating?.albumId) === action.payload.albumId
              )
                ? state.userRatings.map((userRating) =>
                    Number(userRating?.userId) === action.payload.userId &&
                    Number(userRating?.albumId) === action.payload.albumId
                      ? { ...userRating, rating: action.payload.rating }
                      : userRating
                  )
                : [...state.userRatings, action.payload];

                state.userRatings = result
        }
    }
})

export const {
    selectUser,setUserRating,updateUserRating
} = userRatingSlice.actions

export default userRatingSlice.reducer