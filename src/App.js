import './App.css';
import AddAlbumRate from './components/AlbumRating/AlbumRatingGrid';
import AddAlbums from './components/Albums/AddAlbums';
import AddArtists from './components/Artists/AddArtists';
import Home from './components/Home';
import NavBar from './components/NavBar';
import AddUserRate from './components/UserRating/UserRating';
import AddUsers from './components/users/AddUsers';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './components/users/Users';
import Artists from './components/Artists/Artists';
import Albums from './components/Albums/Albums';
import UserRating from './components/UserRating/UserRating';
import SelectUser from './components/UserRating/SelectUser';
import AlbumRatingGrid from './components/AlbumRating/AlbumRatingGrid';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AddUsers' element={<Users />} />
        <Route path='/AddArtists' element={<Artists />} />
        <Route path='/AddAlbums' element={<Albums />} />
        <Route path='/AddUserRate' element={<UserRating />} />
        <Route path='/AlbumRatingGrid' element={<AlbumRatingGrid />} />
        {/* <Route path = '/editArtists/:id' element = {<EditArtists/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
