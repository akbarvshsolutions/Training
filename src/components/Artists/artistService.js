import axios from "axios"

export const getArtist = () => axios.get('http://localhost:8000/getArtists')

export const postArtist = (data) => axios.post('http://localhost:8000/addArtist',data)

export const deleteArtistApi = (id) => 
    axios.delete(`http://localhost:8000/deleteArtist/${id}`)

export const editArtistApi = (artist) => 
    axios.put(`http://localhost:8000/editArtists/${artist._id}`,{ name : artist.name} )

