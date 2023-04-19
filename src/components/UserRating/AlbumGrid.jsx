import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import StarRatings  from "react-star-ratings";
import { useSelector } from "react-redux";
import { IconButton, ImageListItemBar } from "@mui/material";
import { Rating } from "react-simple-star-rating";

const AlbumGrid = ({ albums, handleAlbumRating, loading, error }) => {
  const { selectedUser, userRatings } = useSelector(
    (state) => state.userrating
  );

  return (  
      <ImageList
        sx={{ width: 1150, height: 380 }}
        cols={4}
        rowHeight={281}
        style={{ margin: "1px auto", gap: "8px" }}
      >
        {/* {loading && <div>A moment please...</div>}
        {Object.keys(error).length !== 0 ? (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        ) : (
          ""
        )} */}
        
        {albums.map((album) => {
          return (
            <ImageListItem key={album._id}>
              <img
                src={`${album.albumArt}`}
                srcSet={`${album.albumArt}`}
                loading="lazy"
              />
              <ImageListItemBar
                title={album.albumName}
                subtitle={album.artistName}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${album.albumName}`}
                  ></IconButton>
                }
              ></ImageListItemBar>
            
            <span>Rate</span>
              <StarRatings 
                rating={
                  selectedUser !== "" &&
                  userRatings?.find(
                    (userRating) =>
                      Number(userRating?.albumId) === album._id &&
                      Number(selectedUser) === Number(userRating?.userId)
                  )?.rating !== undefined
                    ? Number(
                        userRatings?.find(
                          (userRating) =>
                            Number(userRating?.albumId) === album._id &&
                            Number(selectedUser) === Number(userRating?.userId)
                        )?.rating
                      )
                    : 0
                }
                starRatedColor="orange"
                changeRating={(rating, _) => handleAlbumRating(rating, album)}
                numberOfStars={5}
                name="rating"
                starDimension="35px"
                starSpacing="5px"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
  );
};

export default AlbumGrid;
