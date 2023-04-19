const initialState = {
  artists : [] ,
  isLoading : true ,
  error : {} ,
  userHeader : [ 'Name' , 'Action' ],
  isEditing : false,
  editingArtist : {} ,
};

const artistReducer = (state = initialState , action) => {
  
  if(action.type === 'LOAD_ARTIST'){
      return{...state , artists : [...action.payload]}
  }

  if(action.type === 'SET_LOADING'){
      return{ ...state , isLoading : action.payload }
  }

  if(action.type === 'SET_ERROR'){
      return {...state , error : action.payload }
  }

  if(action.type === 'ADD_ARTIST'){
      return { ...state , artists : [...state.artists , action.payload] }
  }

  if(action.type === 'DELETE_ARTIST'){
      const filteredUser = state.artists.filter(
          (user) => user._id != action.payload
      )
      return { ...state , artists : filteredUser};
  }

  if(action.type === 'EDIT_ARTIST'){
      return { ...state , editingArtist : action.payload , isEditing : true };
  }

  if(action.type === 'UPDATE_ARTIST'){
        console.log('Action payload ',action.payload)
      const result = state.artists.map((user) => 
          user._id === action.payload._id ? action.payload : user
      ) 
      console.log('result payload ',result)
      
      return {...state , artists : result , isEditing : false , editingArtist : {} };
  }

  return state;
}

export default artistReducer