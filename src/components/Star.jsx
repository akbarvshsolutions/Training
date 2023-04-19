import { Rating } from "react-simple-star-rating";
import {
    loaduserRating,
    deleteuserRating,
    edituserRating,
    setError,
    setLoading,
    setUserRating,
    updateUserRating
} from './UserRating/userRatingAction';

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import SelectUser from "./UserRating/SelectUser";
import UserRating from "./UserRating/UserRating";
import TableData from "../TableData";

function Star(props) {
    const dispatch = useDispatch();
    
    const { userID, imgID } = props
    const { albumID } = props

    let { selectedUser , userRating , isLoading  , error ,isEditing , editingUserRating  } = useSelector(
    (state) => state.userRating);
    
    console.log('user ',selectedUser)
    console.log("userRating",userRating[0])
    console.log('album Id',albumID)
    const [rating, setRating] = useState(0);
    // console.log('userID ',userID)
    // console.log('rating ',rating)
    // let id = userID;
    // useEffect (() => {
        
        // const getData = async() => {
        //     try{
        //         const response = await axios.get(`http://localhost:8000/getSelectedUser/${id}`);
        //         console.log("responce ",response.data[1].rating)
        //         dispatch(loaduserRating(response.data))
        //         setRating(response.data[0].rating)
        //         // toast.success('Users Loaded ')      
        //     }catch(err){
        //         // toast.error('Failed to load user ')
        //         dispatch(setError(err))
        //     }finally{
        //         dispatch(setLoading(false))
        //         id = '';
        //         }
        //     };
            
        // if(id !== ''){
        //     getData();
        // }

    // },[userID]);

    const handleDataRatingSubmit = async (values) => {
        try {

            // console.log('data ',values)
            const res = await axios.post(`http://localhost:8000/addUserRating/`, {
                userID: values.userID,
                imgID: values.imgID,
                rating: values.rating
            });

            if (res.status === 201) {
                toast.success('Artist Added');
                dispatch(setUserRating(res.data))
            }
        } catch (error) {
            toast.error("Axios Call failed!");
            dispatch(setError(error));
        }
    }

    const handleRating = (rate) => {
        setRating(rate);
        // console.log('rate ',rate)
        // console.log(userID,imgID,rating)

        if (userID !== '' && imgID !== '' && rate > 0) {
            let data = {
                userID: userID,
                imgID: imgID,
                rating: rate
            }

            if (rate > 0) {
                handleDataRatingSubmit(data);
            }
        }
    };

    const ratingValue = userRating[0].find(
        (element) => Number(element.userID) === Number(selectedUser) ||
        Number(element.imgID) === Number(albumID) ) ?.rating  

    console.log('ratingValue ',ratingValue)

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                // hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Rating onClick={handleRating} 
                size={25} 
                transition allowFraction allowTitleTag 
                // value = { ratingValue }
                initialValue={ratingValue ? ratingValue :  0}
                // defaultValue={ratingValue ? ratingValue :  0}
            />

        </div>
    )
}

export default Star
