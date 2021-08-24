import React from 'react';
import Profile from './components/Profile';
import Nav from './components/Nav';


const Header = (props) => {
    
    return(
        <header className="header">
            <Profile />
            <Nav />
        </header>
    )
}

export default Header;