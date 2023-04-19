import axios from 'axios';

const URL = 'http://localhost:8000';

export const addArtits = async (data) => {
    try{
        //console.log(data)
        return await axios.post(`http://localhost:8000/addArtist`,data)

        
    }catch(eroor){
        console.log("Error while calling AddArtist Api");
    }
}

export const getArtistsData = async() => {
    try{
        return await axios.get(`${URL}/getArtists`)
    }catch(error){
        console.log("Error while calling getArtist Api")
    }
}

export const getArtist = async (id) => {
    try{
        return await axios.get(`${URL}/editArtist/${id}`);
    }catch(error){
        console.log("Error while calling getUser api",error);
    }
}

