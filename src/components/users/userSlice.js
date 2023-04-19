import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [] ,
    isLoading : true ,
    error : {} ,
    userHeader : [ 'Name' , 'Action' ],
    isEditing : false,
    editingUser : {} ,
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers : {
        loadUsers:(state,action) => {
            state.users = action.payload
        },
        setLoading:(state,action) => {
            state.isLoading = action.payload
        },
        setError:(state,action) => {
            state.error = action.payload
        },
        addUser:(state,action) => {
            state.users.push(action.payload)
        },
        deleteUser:(state,action) => {
            const index = state.users.findIndex((ele) => ele._id === action.payload)
            state.users.splice(index,1)
            // state.users.splice(
            //     state.users.findIndex( (ele) => ele._id === action.payload),
            //     1
            // )
        },
        editUser:(state,action) => {
            state.editingUser = action.payload
            state.isEditing = true
        },
        updateUser:(state,action) => {
            const index = state.users.findIndex(ele => ele._id === action.payload._id)
            state.users[index] = action.payload
            state.isEditing = false
            state.editingUser = {}
        }
    }
})

export const {
    loadUsers,setLoading,setError,addUser,deleteUser,editUser,updateUser
} = userSlice.actions

export default userSlice.reducer