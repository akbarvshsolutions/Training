import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import './ArtistsForm.css'

import axios from "axios";


const validationSchema = Yup.object({
  artistName: Yup.string()
    .min(2, "Please enter artistname with atleast 2 char!")
    .max(20, "Entered artistname is more than 20 char!")
    .required("Please enter artistname!"),
});


const AddArtists = ({ handleUpdateArtist, handleArtistSubmit }) => {
  const { isEditing, editingArtist } = useSelector((state) => state.artist);
  
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
      artistName: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('values data',values)
      isEditing ? handleUpdateArtist(values) : handleArtistSubmit(values);

      resetForm();
    },
  });

  useEffect(() => {
    if (isEditing) {
      setFieldValue("artistName", editingArtist.name);
    }
  }, [isEditing, editingArtist, setFieldValue]);

  return (
    <form className="form">
      <TextField
        // id="artistName"
        name="artistName"
        label={`${isEditing ? "Update artist Name" : "Enter artist Name"}`}
        variant="outlined"
        value={values.artistName}
        onChange={(e) => setFieldValue("artistName", e.target.value)}
        className="input-field"
        error={touched.artistName && Boolean(errors.artistName)}
        helperText={touched.artistName && errors.artistName}
        onBlur={handleBlur}
      />
      <button
        variant="contained"
        type="submit"
        className="btn"
        onClick={handleSubmit}
      >
        {`${isEditing ? "Update" : "Add"}`}
      </button>
    </form>
  );
};

export default AddArtists;
