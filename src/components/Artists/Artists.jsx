import React from 'react'
import AddArtists from './AddArtists';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    loadArtists,
    deleteArtist,
    editArtist,
    setError,
    setLoading,
    addArtist,
    updateArtist
} from './artistsAction';

import TableData from '../../TableData';
import './ArtistsForm.css'

const Artists = () => {
    const dispatch = useDispatch();
    
    const { artists , isLoading , error , userHeader , editingArtist } = useSelector(
        (state) => state.artist
    );
    // console.log(artists)
    // useEffect (() => {
    //     const getData = async() => {
    //         try{
    //             const response = await axios.get(`http://localhost:8000/getArtists`);
    //             dispatch(loadArtists(response.data))
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
          // const res = await axios.delete(`http://localhost:8000/deleteArtist/${id}`);
    
          // if (res.status === 204) {
          //   toast.success("User deleted!!!");
          //   dispatch(deleteArtist(id));
          // }
          dispatch( { type : 'DELETE_ARTIST_EVENT',payload : id } )
        } catch (error) {
          // toast.error("Axios Call failed!");
          // dispatch(setError(error));
        }
      };

    const handleArtistSubmit = async (values) => {
      console.log('values data',values)
        try{  
            // const res = await axios.post(`http://localhost:8000/addArtist/`,{
            //     name : values.artistName,
            // });

            // if(res.status === 201){
            //     toast.success('Artist Added');
            //     dispatch(addArtist(res.data))
            // }

            dispatch( {type : 'ADD_ARTIST_EVENT', payload : {name : values.artistName} })
        }catch(error){
            // toast.error("Axios Call failed!");
            // dispatch(setError(error));
        }
    }

    const handleUpdateArtist = async (values) => {
      //3. update the user in database and store
      try {
        // const newData = { name: values.artistName };
        // console.log('newData',newData)

        // const res = await axios.put(
        //   `http://localhost:8000/editArtists/${editingArtist._id}`,
        //   newData
        // );
  
        // if (res.status === 201) {
        //   toast.success("Updated User!!!");
        //   dispatch(updateArtist({ ...editingArtist, name: res.data.name }));
        // }
        dispatch( { type : 'UPDATE_ARTIST_EVENT' ,
        payload : { ...editingArtist , name : values.artistName}
        } )
      } catch (error) {
        // toast.error("Axios Call failed!");
        // dispatch(setError(error));
      }
    };

    const handleUserEdit = (artist) => {
        // dispatch(editArtist(artist));
        dispatch( { type : 'EDIT_ARTIST_EVENT' , payload : artist} )
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
    <AddArtists
      handleUpdateArtist={handleUpdateArtist}
      handleArtistSubmit={handleArtistSubmit}
    />
    <h2 className="heading" style={{width : '300px'}} >Artists Details</h2>
    <TableData
      data={artists}
      isLoading={isLoading}
      error={error}
      dataHeaders={userHeader}
      handleUserDelete={handleUserDelete}
      handleUserEdit={handleUserEdit}
    />
  </div>
  )
}

export default Artists
