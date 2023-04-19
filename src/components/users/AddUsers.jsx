import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import './UsersForm.css'

import axios from "axios";


const validationSchema = Yup.object({
  userName: Yup.string()
    .min(2, "Please enter username with atleast 2 char!")
    .max(20, "Entered Username is more than 20 char!")
    .required("Please enter Username!"),
});


const AddUsers = ({ handleUpdateUser, handleUserSubmit }) => {
  const { isEditing, editingUser } = useSelector((state) => state.user);

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
      userName: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log('values data',values)
      isEditing ? handleUpdateUser(values) : handleUserSubmit(values);

      resetForm();
    },
  });

  useEffect(() => {
    if (isEditing) {
      setFieldValue("userName", editingUser.name);
    }
  }, [isEditing, editingUser, setFieldValue]);

  return (
    <form className="form">
      <TextField
        // id="userName"
        name="userName"
        label={`${isEditing ? "Update User Name" : "Enter User Name"}`}
        variant="outlined"
        value={values.userName}
        onChange={(e) => setFieldValue("userName", e.target.value)}
        className="input-field"
        error={touched.userName && Boolean(errors.userName)}
        helperText={touched.userName && errors.userName}
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

export default AddUsers;
