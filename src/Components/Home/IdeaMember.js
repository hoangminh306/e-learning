import React from 'react';

import OwlCarousel from "react-owl-carousel3";

import album_1 from "../../Assets/images/album-1.png";
import album_2 from "../../Assets/images/album-2.png";

import "./../../Assets/Styles/style.scss";

const IdeaMember = () => {
    return (
        <>
            <h3 className="modtitle"><span>Ý KIẾN HỌC VIÊN</span></h3>
            <OwlCarousel
                className="owl-theme"
                loop margin={30}
                nav items={1}
                navText={['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']}
            >
                <div className="member">
                    <div className="img__member d-flex">
                        <img
                            src={album_1}
                            alt='member_1'
                        />
                    </div>
                    <div className="idea__member">
                        <i className="fa fa-quote-left"></i>
                        <span>Khóa học này phù hợp cho người mới bắt đầu tìm hiểu về ASP.NET MVC. Giảng viên nói dễ nghe, dễ hiểu</span>
                        <i className="fa fa-quote-right"></i>
                    </div>
                    <span className="idea__member-name">Thui Thủi</span>
                </div>
                <div className="member">
                    <div className="img__member d-flex">
                        <img
                            src={album_2}
                            alt='member_1'
                        />
                    </div>
                    <div className="idea__member">
                        <i className="fa fa-quote-left"></i>
                        <span>Tôi yêu CyberSoft, Tôi biết ơn và gửi lời tri ân từ tận đấy lòng của tui đến với các thầy, đặt biệt là chị mentor Sương Sương cute.</span>
                        <i className="fa fa-quote-right"></i>
                    </div>
                    <span className="idea__member-name">Minh bóng</span>
                </div>
            </OwlCarousel>
        </>
    );
};

export default IdeaMember;