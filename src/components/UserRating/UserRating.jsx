import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
// import useAxios from "../../hooks/useAxios";
// import { setAlbums } from "../albums/albumAction";
// import AlbumGrid from "./AlbumGrid";
import UserRatingForm from "./UserRatingForm";
import { setUserRating, updateUserRating } from "./userRatingAction";
import AlbumGrid from "./AlbumGrid";

const UserRating = () => {
  
  const dispatch = useDispatch();

  const { albums } = useSelector((state) => state.album);
  const { selectedUser } = useSelector((state) => state.userrating);
  
  const getUserRatings = async (userId) => {

  const res = await axios.get(`http://localhost:8000/getSelectedUser/${userId}`);
    
    if (res.status === 200) {
      dispatch(setUserRating(res.data));
      toast.success("User Rating Loaded!");
    }
  };

  const handleAlbumRating = async (rating, album) => {
    if (selectedUser === "") {
      toast.error("Please select user!");
      return;
    }

    // console.log('inside handleAlbumRating',rating,album)    
    // const res = await axios.put(
    //   `http://localhost:8000/editUserRating/${selectedUser}`,
    //   {
    //     userId: selectedUser,
    //     albumId: album._id,
    //     rating: rating,
    //     count: album.count,
    //   }
    // );
    
    // console.log("userRating response ",res)
    // if (res.status === 201) {
    //   dispatch(updateUserRating(res.data));
    //   toast.success("User Rating Updated!");
    // }
    
    dispatch( { type : 'UPDATE_USER_RATING_EVENT' , 
          payload : {
            userId: selectedUser,
            albumId: album._id,
            rating: rating,
            count: album.count,
        }} )
  };


  return (
    <div>
      <ToastContainer/>
      {/* <UserRatingForm getUserRatings={getUserRatings} /> */}
      <UserRatingForm  />
      <AlbumGrid
        albums={albums}
        handleAlbumRating={handleAlbumRating}
        // loading={loading}
        // error={axiosError}
      />
    </div>
  )
}

export default UserRating
