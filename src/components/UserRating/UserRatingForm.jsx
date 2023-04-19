import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { selectUser } from "./userRatingAction";
import { useState } from "react";

const UserRatingForm = ( {getUserRatings} ) => {
    
    const { users } = useSelector(    (state) => state.user );
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState("");

    const handleSubmit = (e) => {
    // dispatch(selectUser(e.target.value));
    // getUserRatings(e.target.value);
    dispatch( { type : 'SELECT_USER_RATING_EVENT' , payload : e.target.value } )
    };

    // console.log('user ',users)
    return(
        <>
        <Box sx={{ minWidth: 120 }} style = {{ width: '300px' , margin: '15px auto' }} >
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">select user</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="user"
                name="user"
                value={inputVal}
                label="select user"
                onChange={(e) => {
                setInputVal(e.target.value);
                handleSubmit(e);
            }}
        >
        { users && users.map((user) => (
            <MenuItem value={user._id} key={user._id}>
              {user.name}
            </MenuItem>
        ))}
            </Select>
      </FormControl>
    </Box>
    </>
    )
}

export default UserRatingForm
