import React from 'react';
import ContactModal from './ContactModal';
import img__contact from "../../Assets/images/call_me.gif";

const Contact = () => {
    return (
        <>
        <div className="contact__container">
            <a data-toggle="modal" data-target="#contactModal">
            <img className="contact__icon" src={img__contact} alt="icon__contact"></img>
            </a>            
        </div>
        <ContactModal/>
        </>
    );
};

export default Contact;