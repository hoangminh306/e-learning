import React from 'react';
import {Link} from "react-router-dom";

import './../../Assets/Styles/style.scss';

import img1__carousel from './../../Assets/images/img1__carousel.jpg';
import img2__carousel from './../../Assets/images/img2__carousel.jpg';
import img3__carousel from './../../Assets/images/img3__carousel.jpg';
import img4__carousel from './../../Assets/images/img4__carousel.jpg';
import img5__carousel from './../../Assets/images/img5__carousel.jpg';

const Carousel = props => {
    return (
        <nav className="carousel__container">
            <div className="carousel container">
                <div className="row m-0">
                    <div className="col-md-6">
                        <div className="img__carousel">
                            <img src={img1__carousel} alt="img"></img>
                            <div className="img__background">
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row imgTop__carousel">
                            <div className="col-md-6 ">
                                <div className="img__carousel">
                                    <img src={img2__carousel} alt="img"></img>
                                    <div className="img__background">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="img__carousel">
                                    <img src={img3__carousel} alt="img"></img>
                                    <div className="img__background">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="img__carousel">
                                    <img src={img4__carousel} alt="img"></img>
                                    <div className="img__background">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <div className="img__carousel">
                                    <img src={img5__carousel} alt="img"></img>
                                    <div className="img__background">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-md-12 all__courses">
                        <Link to="/courses">TẤT CẢ KHOÁ HỌC</Link>
                    </div>
                </div>

            </div>
        </nav>
    ); 
}


export default Carousel;