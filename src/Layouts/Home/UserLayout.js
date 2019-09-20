import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Contact from '../../Components/Home/Contact';

const UserLayout = (props) => {
    return (
        <>
            <Header/>
            {props.children}
            <Contact/>
            <Footer/>
        </>
    );
};

export default UserLayout;