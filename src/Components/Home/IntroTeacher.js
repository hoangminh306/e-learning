import React from 'react';

import Coverflow from "react-coverflow";

import album_1 from "../../Assets/images/album-1.png";
import album_2 from "../../Assets/images/album-2.png";
import album_3 from "../../Assets/images/album-3.png";
import album_4 from "../../Assets/images/album-4.png";

import "./../../Assets/Styles/style.scss";

const IntroTeacher = () => {
    return (
        <Coverflow
            width={960}
            height={480}
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}
        >
            <div className="coverflow__cover__25-7e">
                <img
                    src={album_1}
                    alt='title or description'
                />
                <div className="teachers__contact">
                    <span>Lê Quang Song</span>
                    <p>Thạc sĩ trường ĐH Khoa học tự nhiên</p>
                    <div className="contact">
                        <i className="fa fa-twitter icon_twi"></i>
                        <i className="fa fa-facebook-f icon_fa"></i>
                        <i className="fa fa-google-plus icon_go"></i>
                    </div>
                </div>
            </div>
            <div className="coverflow__cover__25-7e">
                <img
                    src={album_2}
                    alt='title or description'
                />
                <div className="teachers__contact">
                    <span>Lê Quang Song</span>
                    <p>Công tác tại FPT F-Soft</p>
                    <div className="contact">
                        <i className="fa fa-twitter icon_twi"></i>
                        <i className="fa fa-facebook-f icon_fa"></i>
                        <i className="fa fa-google-plus icon_go"></i>
                    </div>
                </div>
            </div>
            <div className="coverflow__cover__25-7e">
                <img
                    src={album_3}
                    alt='title or description'
                />
                <div className="teachers__contact">
                    <span>Lê Quang Song</span>
                    <p>Tiến sĩ trường ĐH Bách khoa</p>
                    <p></p>
                    <div className="contact">
                        <i className="fa fa-twitter icon_twi"></i>
                        <i className="fa fa-facebook-f icon_fa"></i>
                        <i className="fa fa-google-plus icon_go"></i>
                    </div>
                </div>
            </div>
            <div className="coverflow__cover__25-7e">
                <img
                    src={album_4}
                    alt='title or description'
                />
                <div className="teachers__contact">
                    <span>Lê Quang Song</span>
                    <p>Tiến sĩ trường ĐH Bách khoa</p>
                    <div className="contact">
                        <i className="fa fa-twitter icon_twi"></i>
                        <i className="fa fa-facebook-f icon_fa"></i>
                        <i className="fa fa-google-plus icon_go"></i>
                    </div>
                </div>
            </div>
            <div className="coverflow__cover__25-7e">
                <img
                    src={album_1}
                    alt='title or description'
                />
                <div className="teachers__contact">
                    <span>Lê Quang Song</span>
                    <p>Tiến sĩ trường ĐH Bách khoa</p>
                    <div className="contact">
                        <i className="fa fa-twitter icon_twi"></i>
                        <i className="fa fa-facebook-f icon_fa"></i>
                        <i className="fa fa-google-plus icon_go"></i>
                    </div>
                </div>
            </div>
        </Coverflow>
    );
};

export default IntroTeacher;