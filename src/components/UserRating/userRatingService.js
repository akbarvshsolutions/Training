import axios from "axios";

export const fetchUserRatingApi = (user) => axios.get(`http://localhost:8000/getSelectedUser/${user}`)

export const updateUserRatingApi = (data) => axios.put(`http://localhost:8000/editUserRating/${data.userId}`,
{
    userId : data.userId,
    albumId : data.albumId,
    rating : data.rating,
    count : data.count
})