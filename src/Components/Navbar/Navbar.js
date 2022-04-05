import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div id='navbar' className='flex flex-row justify-center gap-10 m-8 font-bold'>
            <CustomLink to="/">HOME</CustomLink>
            <CustomLink to="/reviews">REVIEWS</CustomLink>
            <CustomLink to="/dashboard">DASHBOARD</CustomLink>
            <CustomLink to="/blogs">BLOGS</CustomLink>
            <CustomLink to="/about">ABOUT</CustomLink>
        </div>
    );
};

export default Navbar;