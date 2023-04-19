const initialState = {
    users : [] ,
    isLoading : true ,
    error : {} ,
    userHeader : [ 'Name' , 'Action' ],
    isEditing : false,
    editingUser : {} ,
};

const userReducer = (state = initialState , action) => {
    
    if(action.type === 'LOAD_USERS'){
        return{...state , users : [...action.payload]}
    }

    if(action.type === 'SET_LOADING'){
        return{ ...state , isLoading : action.payload }
    }

    if(action.type === 'SET_ERROR'){
        return {...state , error : action.payload }
    }

    if(action.type === 'ADD_USER'){
        return { ...state , users : [...state.users , action.payload] }
    }

    if(action.type === 'DELETE_USER'){
        const filteredUser = state.users.filter(
            (user) => user._id != action.payload
        )
        return { ...state , users : filteredUser};
    }

    if(action.type === 'EDIT_USER'){
        return { ...state , editingUser : action.payload , isEditing : true };
    }

    if(action.type === 'UPDATE_USER'){
        const result = state.users.map((user) => 
            user._id === action.payload._id ? action.payload : user
        )

        return {...state , users : result , isEditing : false , editingUser : {} };
    }

    return state;
}

export default userReducer