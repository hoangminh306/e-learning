import React from "react";
import "./../../Assets/Styles/style.scss";
import imgLogo from "./../../Assets/images/logo.png";
import imgBoCongThuong from "../../Assets/images/footer_logo_congthuong.png";
import imgthanhtoan__1 from "../../Assets/images/footer_mastercard.png";
import imgthanhtoan__2 from "../../Assets/images/footer_tienmat.png";
import imgthanhtoan__3 from "../../Assets/images/footer_visa-icon.png";
import imgthanhtoan__4 from "../../Assets/images/footer_jcb.png";
import imgthanhtoan__5 from "../../Assets/images/footer_internet-banking-icon.jpg";
import imglienhe__1 from "../../Assets/images/footer_fb-ico.png";
import imglienhe__2 from "../../Assets/images/footer_icon_youtube.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__background" />
        <div className="footer__cloud" />
        <div className="footer__content ">
          <div className="content__background"></div>
          <div className="content__1 col-md-3">
            <img src={imgLogo} alt="logo" className="footer__logo" />
            <div className="content__1--text">
              <p> Mã số thuế: 0123888889</p>
              <p> Ngày cấp: 05/9/2019</p>
              <img src={imgBoCongThuong} alt="logo_BCT" className="logo_BCT"></img>
            </div>
          </div>
          <div className="content__2 col-md-3">
            <h6>
              CÔNG TY CỔ PHẦN ĐẦU TƯ GIÁO DỤC THỊNH PHÁT 
            </h6>
            <p>
              Địa chỉ: 87 Sư Vạn Hạnh, Phường 12, Quận 10, Hồ Chí Minh, Việt Nam.
            </p>
            <p>Điện thoại: 0968888888</p>
            <p>Người đại diện: NGUYỄN VĂN A</p>
          </div>
          <div className="content__3 col-md-3">
            <h6>PHƯƠNG THỨC THANH TOÁN</h6>
            <img src={imgthanhtoan__1} alt="imgthanhtoan__1"></img>
            <img src={imgthanhtoan__2} alt="imgthanhtoan__1"></img>
            <img src={imgthanhtoan__3} alt="imgthanhtoan__1"></img>
            <img src={imgthanhtoan__4} alt="imgthanhtoan__1"></img>
            <img src={imgthanhtoan__5} alt="imgthanhtoan__1"></img>
          </div>
          <div className="content__4 col-md-3">
            <h6>KẾT NỐI VỚI CHÚNG TÔI</h6>
            <img src={imglienhe__1} alt="lienhe_fb"></img>
            <img src={imglienhe__2} alt="lienhe_youtube"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;