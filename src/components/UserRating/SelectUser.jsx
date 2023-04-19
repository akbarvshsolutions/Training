import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { toast } from "react-toastify";
import { Grid } from '@mui/material'
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material'; 
import { Rating } from 'react-simple-star-rating'
// import './UserRating.css'
import axios from "axios";
import Star from "../Star";

import {
  selectUser,
  loaduserRating,
  deleteuserRating,
  edituserRating,
  setError,
  setLoading,
  setUserRating,
  updateuserRating
} from './userRatingAction';


function SelectUser() {

  const [inputValue , setInputValue] = useState('');

  const { users } = useSelector(
    (state) => state.user
  );

  let { selectUser , userRating , isLoading  , error ,isEditing , editingUserRating  } = useSelector(
    (state) => state.userRating);

  const dispatch = useDispatch();

  // console.log('userRating ',userRating)
  const { albums } = useSelector((state) => state.album);
  console.log("albums",albums)


  const getData = async(id) => {
    try{
        const response = await axios.get(`http://localhost:8000/getSelectedUser/${id}`);
        console.log(response)
        console.log('inputValue ',inputValue)
        dispatch(loaduserRating(response.data))
        // toast.success('Users Loaded ')      
    }catch(err){
        // toast.error('Failed to load user ')
        dispatch(setError(err))
    }finally{
        dispatch(setLoading(false))
        // id = '';
        }
    };

  const handleSubmit = (val)=> {
    console.log('val',val)
    dispatch(selectUser(val))
            
        if(val !== ''){
            getData(val);
        }
  }
console.log("album,",albums)
  return (
    <>
      <Box sx={{ minWidth: 120 } } style = {{ width: '300px' , margin: '15px auto' }}>      
      <FormControl fullWidth> 
          <InputLabel id="demo-simple-select-label">select user</InputLabel>  
            <Select          
              labelId="demo-simple-select-label"          
              id="user"          
              name="user"          
              value={inputValue}          
              label="select user"          
              onChange={(e) => { 
                setInputValue(e.target.value);            
                handleSubmit(e.target.value);          
              }}  >          
              {users.map((user) => (            
                <MenuItem value={user._id} key={user._id}>              
                  {user.name}            
                </MenuItem>          
              ))}        
            </Select>      
        </FormControl>    
      </Box>

      <ImageList sx={{ width: 1250, height: 600 }} cols={5} rowHeight={200} style={{ margin: '1px auto', gap: '8px' }}>
        { albums.map((item, index) => (
          <ImageListItem key={item.img} >
            <img
              src={`${item.albumArt}`}
              // srcSet={`${item.albumArt}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.albumName}
              subtitle={item.artistName}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.albumName}`}
                >
                  {/* <InfoIcon /> */}
                </IconButton>
              }>

            </ImageListItemBar>

            <div className='App'>
              <span>Rate</span>
              {/* <Star userID={inputValue} imgID={item._id} /> */}
              {/* <Star albumID = {item._id} /> */}
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};


export default SelectUser;
