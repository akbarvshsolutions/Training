import { AppBar , Toolbar , styled  } from '@mui/material';

import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background : blue;
`;

const TabsHead = styled(NavLink)`
    font-size : 20px;
    margin-right : 20px;
    color : orange;
    text-decoration :none;
`

const Tabs = styled(NavLink)`
    font-size : 16px;
    margin-right : 20px;
    text-decoration :none;
    color : lightyellow
`

const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <TabsHead>Music Album</TabsHead>
                <Tabs to = '/'>Home</Tabs>
                <Tabs to = '/addUsers' >Users</Tabs>
                <Tabs to = '/addArtists' >Artists</Tabs>
                <Tabs to = '/addAlbums' >Albums</Tabs>
                <Tabs to = '/addUserRate' >User Rating</Tabs>
                <Tabs to = '/AlbumRatingGrid' >Album Rating</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;