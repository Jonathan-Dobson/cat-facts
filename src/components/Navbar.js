import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
            <Link to = '/facts'>Favorite Facts </Link>
            <Link to = '/'> Home </Link>
            <Link to = '/image'> Favorite Images </Link>
        </div>
    )
}

export default Navbar