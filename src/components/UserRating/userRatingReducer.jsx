const initialState = {
    selectedUser : '',
    userRatings : [] ,
    isLoading : true ,
    error : {} ,
  };
  
  const userRatingReducer = (state = initialState , action) => {
    
    if(action.type === 'SELECT_USER'){
        return {...state , selectedUser : action.payload }
    }
  
    if(action.type === 'SET_USERRATING'){
        return { ...state , userRatings :  action.payload }
    }

    if (action.type === "UPDATE_USERRATING") {
        //if record is present then update
        // state.userRatings.find(userRating => )
        //if not then add the record
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
    
        return { ...state, userRatings: result };
      }
    
    ////////////////////////////////////////

    if(action.type === 'LOAD_USERRATING'){
        return{...state , userRating : [action.payload]}
    }
  
    if(action.type === 'SET_LOADING'){
        return{ ...state , isLoading : action.payload }
    }
  
    if(action.type === 'SET_ERROR'){
        return {...state , error : action.payload }
    }

    if(action.type === 'DELETE_USERRATING'){
        const filteredUser = state.userRating.filter(
            (user) => user._id != action.payload
        )
        return { ...state , userRating : filteredUser};
    }
  
    if(action.type === 'EDIT_USERRATING'){
        return { ...state , editingUserRating : action.payload , isEditing : true };
    }
  
    if(action.type === 'UPDATE_USERRATING'){
        const result = state.userRating.map((user) => 
            user._id === action.payload._id ? action.payload : user
        )
  
        return {...state , userRating : result , isEditing : false , editingUserRating : {} };
    }


    return state;
  }
  
  export default userRatingReducer