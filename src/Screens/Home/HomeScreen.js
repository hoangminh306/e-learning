import React from 'react';
import Header from '../../Layouts/Home/Header';
import Carousel from '../../Components/Home/Carousel';
import Footer from '../../Layouts/Home/Footer';
import IntroCourses from '../../Components/Home/IntroCourses';
import IntroTeacher from '../../Components/Home/IntroTeacher';
import IdeaMember from '../../Components/Home/IdeaMember';
import Contact from '../../Components/Home/Contact';

const HomeScreen = () => {
    return (
        <>
            <Header />
            <Carousel></Carousel>
            <IntroCourses />
            <div className="container">
                <div className="row p-0">
                    <div className="col-md-8">
                        <IntroTeacher></IntroTeacher>
                    </div>
                    <div className="col-md-4">
                        <IdeaMember></IdeaMember>
                    </div>
                </div>
            </div>
            <Contact/>
            <Footer />
        </>
    );
};

export default HomeScreen;