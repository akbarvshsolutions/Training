import React from 'react'
import AddUsersData from './AddUsers';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    loadUsers,
    deleteUser,
    editUser,
    setError,
    setLoading,
    addUser,
    updateUser
} from './userActoin';
import AddUsers from './AddUsers';
import TableData from '../../TableData';

const Users = () => {
    const dispatch = useDispatch();
    
    const { users , isLoading , error , userHeader , editingUser } = useSelector(
        (state) => state.user
    );


    // useEffect (() => {
    //     const getData = async() => {
    //         try{
    //             const response = await axios.get(`http://localhost:8000/getUsers`);
    //             console.log('res',response.data)
    //             dispatch(loadUsers(response.data))
    //             // toast.success('Users Loaded ')      
    //         }catch(err){
    //             toast.error('Failed to load user ')
    //             dispatch(setError(err))
    //         }finally{
    //             dispatch(setLoading(false))
    //             }
    //         };
            
    //     getData();

    // },[]);

    const handleUserDelete = async (id) => {
        try {
          // const res = await axios.delete(`http://localhost:8000/deleteUsers/${id}`);
    
          // if (res.status === 204) {
          //   toast.success("User deleted!!!");
          //   dispatch(deleteUser(id));
          // }
          dispatch( { type : 'DELETE_USER_EVENT' , payload : id } )
        } catch (error) {
          // toast.error("Axios Call failed!");
          // dispatch(setError(error));
        }
      };

    const handleUserSubmit = async (values) => {
        try{  
            // const res = await axios.post(`http://localhost:8000/addUsers/`,{
            //     name : values.userName,
            // });

            // if(res.status === 201){
            //     toast.success('User Added');
            //     dispatch(addUser(res.data))
            // }
            // console.log('values data',values)
            dispatch( { type : 'ADD_USER_EVENT' , payload : {name : values.userName} } );
      
        }catch(error){
            // toast.error("Axios Call failed!");
            // dispatch(setError(error));
        }
    }

    const handleUpdateUser = async (values) => {
      //3. update the user in database and store
      try {
        // const newData = { name: values.userName };
        // console.log('newData',newData)
        // console.log('edit',editUser)
        // const res = await axios.put(
        //   `http://localhost:8000/editUsers/${editingUser._id}`,
        //   newData
        // );
  
        // if (res.status === 201) {
        //   toast.success("Updated User!!!");
        //   dispatch(updateUser({ ...editingUser, name: res.data.name }));
        // }
        dispatch({
          type : 'UPDATE_USER_EVENT',
          payload : { ...editingUser , name : values.userName}
        })
      } catch (error) {
        // toast.error("Axios Call failed!");
        // dispatch(setError(error));
      }
    };

    const handleUserEdit = (user) => {
        // console.log('user edit',editUser(user._id))
        // dispatch(editUser(user));
        dispatch( { type : 'EDIT_USER_EVENT' , payload : user} )
    };

  return (
    <div className="container-users">
    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <AddUsers
      handleUpdateUser={handleUpdateUser}
      handleUserSubmit={handleUserSubmit}
    />
    <h2 className="heading" >User Details</h2>
    <TableData
      data={users}
      isLoading={isLoading}
      error={error}
      dataHeaders={userHeader}
      handleUserDelete={handleUserDelete}
      handleUserEdit={handleUserEdit}
    />
  </div>
  )
}

export default Users
