export const selectUser = (userID) => {
  return{
      type : 'SELECT_USER',
      payload : userID
  }
}

export const setUserRating = (userRating) => {
  return{
      type : 'SET_USERRATING',
      payload : userRating,
  }
}


export const updateUserRating = (userRating) => {
  return{
      type : 'UPDATE_USERRATING',
      payload : userRating
  }
}


////////////////////////////////////////////

export const loaduserRating = (userRating) => {
    return{
        type : 'LOAD_USERRATING',
        payload : userRating
    }
  }
  
  export const setLoading = (val) => {
    return{
        type : 'SET_LOADING',
        payload : val
    }
  }
  
  export const setError = (err) => {
    return{
        type : 'SET_ERROR',
        payload : err
    }
  }
  
  export const deleteuserRating = (id) => {
    return{
        type : 'DELETE_USERRATING',
        payload : id
    }
  }
  
  export const edituserRating = (userRating) => {
    return{
        type : 'EDIT_USERRATING',
        payload : userRating,
    }
  }
 