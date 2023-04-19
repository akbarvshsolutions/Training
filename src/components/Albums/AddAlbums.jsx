import { Button , MenuItem  } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { toast } from "react-toastify";

import './Album.css';
import axios from "axios";


const validationSchema = Yup.object({
  albumName: Yup.string()
    .min(2, "Please enter album name with atleast 2 char!")
    .max(20, "Entered album name is more than 20 char!")
    .required("Please enter albumn name!"),

  albumArt: Yup.string()
    .min(2, "Please enter album art with atleast 2 char!")
    .required("Please enter albumn art!") ,

  artistName : Yup.string().required('Select some options')
});


const AddAlbums = ({ handleUpdateAlbum , handleAlbumSubmit }) => {
  const { isEditing, editingAlbum } = useSelector((state) => state.album);
  const { artists } = useSelector(
    (state) => state.artist
  );
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    handleBlur,
  } = useFormik({
    initialValues: {
      artistName : '',
      albumName: "",
      albumArt: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('values data', values)
      isEditing ? handleUpdateAlbum(values) : handleAlbumSubmit(values);

      resetForm();
    },
  });

  useEffect(() => {
    if (isEditing) {
      setFieldValue("artistName", editingAlbum.artistName );
      setFieldValue("albumName", editingAlbum.albumName );
      setFieldValue("albumArt", editingAlbum.albumArt );
    }
  }, [isEditing, editingAlbum , setFieldValue]);

  return (
    <form className="albumform">
      <TextField 
      label="Select Artist" 
      name="artistName"
      style = {{width : '300px' ,  marginTop : '2px'}}
      error={touched.artistName && Boolean(errors.artistName)}
      helperText={touched.artistName && errors.artistName}
      onBlur={handleBlur}
      onChange={(e) => setFieldValue("artistName", e.target.value)}
      // onChange={Formik.handleChange}
        select  value={values.artistName} >
        {
          artists.map(user => (
            <MenuItem value={user.name} key={user.name}>{user.name}</MenuItem>
          ))
        }
      </TextField>

      <TextField
        name="albumName"
        label={`${isEditing ? "Update albumn name" : "Enter albumn name"}`}
        variant="outlined"
        value={values.albumName}
        onChange={(e) => setFieldValue("albumName", e.target.value)}
        className="input-fields"
        error={touched.albumName && Boolean(errors.albumName)}
        helperText={touched.albumName && errors.albumName}
        onBlur={handleBlur}
      />

      <TextField
        name="albumArt"
        label={`${isEditing ? "Update albumn art name" : "Enter albumn art name"}`}
        variant="outlined"
        value={values.albumArt}
        onChange={(e) => setFieldValue("albumArt", e.target.value)}
        className="input-fields"
        error={touched.albumArt && Boolean(errors.albumArt)}
        helperText={touched.albumArt && errors.albumArt}
        onBlur={handleBlur}
      />

      <Button
        variant="contained"
        type="submit"
        className="btn"
        onClick={handleSubmit}
      >
        {`${isEditing ? "Update" : "Add"}`}
      </Button>
    </form>
  );
};

export default AddAlbums;
