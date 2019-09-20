import React, { useEffect } from "react";
import imgLogo from "./../../Assets/images/logo.png";
import LoginModal from "../../Components/Home/LoginModal";
import SignUpModal from "../../Components/Home/SignUpModal";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { actFetchLoginUser, actLogout } from "../../Store/Actions/User";
import { restConnector } from "../../Connectors/Axios";
import { connect } from "react-redux";

import "./../../Assets/Styles/style.scss";

import iconUser from "../../Assets/images/album-1.png"
import { fetchCoursesByCategory, fetchCoursesCategories } from "../../Store/Actions/Course";

const useStyles = makeStyles(theme => ({
  button: {
    float: 'right',
    background: '#ff3e01',
    "&:hover": {
      background: '#FEF2E8',
      color: 'black'
    },
    "&:focus": {
      outline: "none"
    }
  },

}));

const Header = (props) => {
  const classes = useStyles();

  const _handleCategory = (maDanhMuc) => {
    props.dispatch(fetchCoursesByCategory(maDanhMuc));
  }

  const _handleLogout = () => {
    localStorage.removeItem("userLogin");
    props.dispatch(actLogout());
  }

  const _renderCoursesCategory = (data = []) => {
    return data.map((category, index) => {
      return (
        <li className="nav-item" key = {index}>
          <Link className="nav-link" to="/courses" onClick={() => _handleCategory(category.maDanhMuc)}>
            {category.tenDanhMuc}
          </Link>
        </li>
      )
    })
    
  }

  useEffect(() => {
    props.dispatch(fetchCoursesCategories());
    const userLogin = localStorage.getItem("userLogin");
    if (userLogin) {
      props.dispatch(actFetchLoginUser(JSON.parse(userLogin)));
      restConnector.defaults.headers["Authorization"] = `Bearer ${
        JSON.parse(userLogin).accessToken
        }`;
    }
  }, [])

  return (
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">
            <img src={imgLogo} alt="logo" />
          </Link>
        </div>
        <div className="header__link header__tag--a">
          <Link to="/introduce" className="introduce">
            Giới thiệu
          </Link>
        </div>
        <div className="header__search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="search" />
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-search" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
        <div className="header__right">
          <div className="header__right--hotline">
            <p>
              <b>HOTLINE</b>
            </p>
            0961.05.10.14
          </div>
          {!props.userLogin && (
            <>
              <button
                type="button"
                className="btnLogin header__tag--button"
                data-toggle="modal"
                data-target="#modalLogin"
              >
                Login
              </button>
              <button
                type="button"
                className="btnSignUp header__tag--button"
                data-toggle="modal"
                data-target="#modalSignUp"
              >
                Sign Up
              </button>
            </>
          )}

          {props.userLogin && (
            <>
              <div className="header__right--user">
                <Link to="/user" className="header__right--userLogin header__tag--a">
                  <img className="userLogin--icon" src={iconUser}></img>
                  {props.userLogin.taiKhoan}
                </Link>
                <Button variant="contained" color="secondary" className={classes.button} onClick={_handleLogout}>
                  Đăng xuất
                </Button>
              </div>
            </>
          )}

        </div>
      </div>
      <div className="header__line"></div>  
      <div className="header__nav">
        <ul className="nav justify-content-center">
          {_renderCoursesCategory(props.coursesCategory)}
          {/* <li className="nav-item">
            <Link className="nav-link" to="/courses/front-end" onClick={_handleFrontEnd}>
              Front end
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses/back-end" onClick={_handleBackEnd}>
              Back end
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses/fullstack" onClick={_handleFullStack}>
              Full stack
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/courses/mobile" onClick={_handleMobile}>
              Mobile
            </Link>
          </li> */}
        </ul>
      </div>
      <LoginModal />
      <SignUpModal />
    </div>
  );
};

export default connect(state => ({ userLogin: state.user.userLogin, coursesCategory: state.courseData.coursesCategory }))(Header);
