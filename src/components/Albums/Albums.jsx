import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    loadAlbum,
    deleteAlbum,
    editAlbum,
    setError,
    setLoading,
    addAlbum,
    updateAlbum
} from './albumAction';

import './Album.css';

import TableData from '../../TableData';
import AddAlbums from './AddAlbums';

const Albums = () => {
    const dispatch = useDispatch();
    
    const { albums , isLoading , error , userHeader , editingAlbum } = useSelector(
        (state) => state.album
    );

    // useEffect (() => {
    //     const getData = async() => {
    //         try{
    //             const response = await axios.get(`http://localhost:8000/getAlbum`);
    //             console.log(response.data)
    //             dispatch(loadAlbum(response.data))
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
          // const res = await axios.delete(`http://localhost:8000/deleteAlbum/${id}`);
    
          // if (res.status === 204) {
          //   toast.success("User deleted!!!");
          //   dispatch(deleteAlbum(id));
          // }
          dispatch( { type : 'DELETE_ALBUM_EVENT' , payload : id} )
        } catch (error) {
          // toast.error("Axios Call failed!");
          // dispatch(setError(error));
        }
      };

    const handleAlbumSubmit = async (values) => {
      console.log('values data',values)
        try{  
            // const res = await axios.post(`http://localhost:8000/addAlbum/`,{
            //     artistName : values.artistName,
            //     albumName : values.albumName,
            //     albumArt : values.albumArt,
            //     count: 0,
            // });

            // if(res.status === 201){
            //     toast.success('Artist Added');
            //     dispatch(addAlbum(res.data))
            // }

            dispatch( { type : 'ADD_ALBUM_EVENT' , 
            payload : { 
              artistName : values.artistName,
              albumName : values.albumName,
              albumArt : values.albumArt,
              count : 0
            } } )

        }catch(error){
            // toast.error("Axios Call failed!");
            // dispatch(setError(error));
        }
    }

    const handleUpdateAlbum = async (values) => {
      //3. update the user in database and store
      console.log('values data',values)
      try {
        // const newData = { artistName : values.artistName,
        //   albumName : values.albumName,
        //   albumArt : values.albumArt };

        // console.log('edit album ',editingAlbum._id)

        // const res = await axios.put(
        //   `http://localhost:8000/editAlbum/${editingAlbum._id}`,
        //   newData
        // );
        //   console.log('response data ',res.data)
        // if (res.status === 201) {
        //   toast.success("Updated User!!!");
        //   dispatch(updateAlbum({ ...editingAlbum, artistName: res.data.artistName, albumName :res.data.albumName , albumArt : res.data.albumArt }));
        // }
        dispatch( { type : 'UPDATE_ALBUM_EVENT' ,
        payload : {...editingAlbum ,
          artistName: values.artistName,
          albumName : values.albumName , 
          albumArt : values.albumArt}
      } )
      } catch (error) {
        // toast.error("Axios Call failed!");
        // dispatch(setError(error));
      }
    };

    const handleUserEdit = (artist) => {
        // console.log(artist)
        // dispatch(editAlbum(artist));
        dispatch( { type : 'EDIT_ALBUM_EVENT' , payload : artist })
    };

  return (
    <div className="container-users">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    <AddAlbums
      handleUpdateAlbum={handleUpdateAlbum}
      handleAlbumSubmit={handleAlbumSubmit}
    />
    <h2 className="Table-heading" >Albums Details</h2>
    <TableData
      data={albums}
      isLoading={isLoading}
      error={error}
      dataHeaders={userHeader}
      handleUserDelete={handleUserDelete}
      handleUserEdit={handleUserEdit}
    />
  </div>
  )
}

export default Albums
