import axios from "axios";

export const getUsers = () => axios.get('http://localhost:8000/getUsers');

export const postUsers = (data) => axios.post('http://localhost:8000/addUsers',data)

export const deleteUserApi = (id) => 
    axios.delete(`http://localhost:8000/deleteUsers/${id}`)

export const updateUserApi = (user) => 
    axios.put(`http://localhost:8000/editUsers/${user._id}`,{ name : user.name })