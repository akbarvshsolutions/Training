import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    albums : [] ,
    isLoading : true ,
    error : {} ,
    userHeader : [ 'Artist' , 'Album' , 'Album Art' , 'Album Action'],
    isEditing : false,
    editingAlbum : {} ,
}

const albumSlice = createSlice({
    name : 'albumSlice',
    initialState,
    reducers : {
        loadAlbum : (state , action) => {
            state.albums = action.payload
        },
        setLoading : (state , action) => {
            state.isLoading = action.payload
        },
        setError : (state,action) => {
            state.error = action.payload
        },
        addAlbum : (state,action) => {
            state.albums.push(action.payload)
        },
        deleteAlbum : (state,action) => {
            const index = state.albums.findIndex(ele => ele._id === action.payload)
            state.albums.splice(index,1)
        },
        editAlbum : (state,action) => {
            state.editingAlbum = action.payload
            state.isEditing = true
        },
        updateAlbum : (state,action) => {
            const index = state.albums.findIndex(ele => ele._id === action.payload._id)
            state.albums[index] = action.payload
            state.isEditing = false
            state.editingAlbum = {}
        }
    }
})

export const {
    loadAlbum,setLoading,setError,addAlbum,deleteAlbum,editAlbum,updateAlbum
} = albumSlice.actions

export default albumSlice.reducer