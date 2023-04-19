import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";
import { useEffect, useState } from "react";
import Progress from "react-progressbar";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const AlbumRatingGrid = () => {
  const { users } = useSelector((state) => state.user);

  const [albums , setAlbums] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/getAlbum`);
        console.log(response.data);
        setAlbums(response.data)
        // dispatch(loadAlbum(response.data));
        // toast.success('Users Loaded ')
      } catch (err) {
        toast.error("Failed to load user ");
        // dispatch(setError(err));
      } finally {
        // dispatch(setLoading(false));
      }
    };

    getData();
  }, []);
  console.log('albums ',albums)

  return (
    <>
    <span style={ {margin : '1px 100px' , fontSize : '20px'} }>Album Rating</span>
    <ImageList
      sx={{ width: "85%" }}
      gap={20}
      cols={4}
      rowHeight={164}
      style={{margin : '10px auto'}}
    >
      {albums && albums.map((album) => (
        <ImageListItem
          key={album._id}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            height: "80%",
          }}
        >
          <img src={album.albumArt} alt={album.name} loading="lazy" />
          <p>
            <span>
              Album Rating: {Math.round(( (album.count) / users?.length) * 50) }%
              out of {users?.length} users
            </span>
            <Progress
              completed={Math.round(( (album.count) / users?.length) * 50)}
            />
          </p>
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
};

export default AlbumRatingGrid;
