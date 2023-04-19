const initialState = {
    albums : [] ,
    isLoading : true ,
    error : {} ,
    userHeader : [ 'Artist' , 'Album' , 'Album Art' , 'Album Action'],
    isEditing : false,
    editingAlbum : {} ,
  };
  
  const albumReducer = (state = initialState , action) => {
    
    if(action.type === 'LOAD_ALBUM'){
        return{...state , albums : [...action.payload]}
    }
  
    if(action.type === 'SET_LOADING'){
        return{ ...state , isLoading : action.payload }
    }
  
    if(action.type === 'SET_ERROR'){
        return {...state , error : action.payload }
    }
  
    if(action.type === 'ADD_ALBUM'){
        return { ...state , albums : [...state.albums , action.payload] }
    }
  
    if(action.type === 'DELETE_ALBUM'){
        const filteredUser = state.albums.filter(
            (user) => user._id != action.payload
        )
        return { ...state , albums : filteredUser};
    }
  
    if(action.type === 'EDIT_ALBUM'){
        return { ...state , editingAlbum : action.payload , isEditing : true };
    }
  
    if(action.type === 'UPDATE_ALBUM'){
        const result = state.albums.map((user) => 
            user._id === action.payload._id ? action.payload : user
        )
  
        return {...state , albums : result , isEditing : false , editingAlbum : {} };
    }
  
    return state;
  }
  
  export default albumReducer