export const loadArtists = (artists) => {
  return{
      type : 'LOAD_ARTIST',
      payload : artists
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

export const addArtist = (artist) => {
  return{
      type : 'ADD_ARTIST',
      payload : artist,
  }
}

export const deleteArtist = (id) => {
  return{
      type : 'DELETE_ARTIST',
      payload : id
  }
}

export const editArtist = (artist) => {
  return{
      type : 'EDIT_ARTIST',
      payload : artist,
  }
}

export const updateArtist = (artist) => {
  return{
      type : 'UPDATE_ARTIST',
      payload : artist
  }
}
