import axios from "axios";

// router.post('/addAlbum',addAlbum)
// router.get('/getAlbum',getAlbum)
// router.put('/editAlbum/:id',editAlbum)
// router.delete('/deleteAlbum/:id',deleteAlbum)

export const getAlbumsApi = () => axios.get('http://localhost:8000/getAlbum')

export const postAlbumsApi = (data) => axios.post('http://localhost:8000/addAlbum',data)

export const deleteAlbumsApi = (id) => axios.delete(`http://localhost:8000/deleteAlbum/${id}`)

export const editAlbumApi = (data) => axios.put(`http://localhost:8000/editAlbum/${data._id}`, 
    { 
        artistName : data.artistName,
        albumName : data.albumName,
        albumArt : data.albumArt,
        count: 0,
    }
)