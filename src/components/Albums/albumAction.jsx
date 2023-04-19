export const loadAlbum = (albums) => {
    return{
        type : 'LOAD_ALBUM',
        payload : albums
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
  
  export const addAlbum = (album) => {
    return{
        type : 'ADD_ALBUM',
        payload : album,
    }
  }
  
  export const deleteAlbum = (id) => {
    return{
        type : 'DELETE_ALBUM',
        payload : id
    }
  }
  
  export const editAlbum = (album) => {
    return{
        type : 'EDIT_ALBUM',
        payload : album,
    }
  }
  
  export const updateAlbum = (album) => {
    return{
        type : 'UPDATE_ALBUM',
        payload : album
    }
  }
  