import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    artists : [],
    isLoading : true,
    error : {},
    userHeader : [ 'Name' , 'Action' ],
    editingArtist : {},
    isEditing : false
}

const artistSlice = createSlice({
    name : 'artistSlice',
    initialState,
    reducers : {
        loadArtists : (state,action) =>{
            state.artists = action.payload
        },
        setLoading : (state,action) => {
            state.isLoading = action.payload
        },
        setError : (state,action) => {
            state.error = action.payload
        },
        addArtist : (state,action) => {
            state.artists.push(action.payload)
        },
        deleteArtist : (state,action) => {
            const index = state.artists.findIndex(ele => ele._id === action.payload)
            state.artists.splice(index,1)
        },
        editArtist : (state,action) => {
            console.log('action payload',action.payload)
            state.editingArtist = action.payload
            state.isEditing = true
        },
        updateArtist : (state,action) => {
            const index = state.artists.findIndex(ele => ele._id === action.payload._id)
            state.artists[index] = action.payload
            state.isEditing = false
            state.editingArtist = {}
        }   
    }
})

export const {
    loadArtists,setLoading,setError,addArtist,deleteArtist,editArtist,updateArtist
} = artistSlice.actions

export default artistSlice.reducer