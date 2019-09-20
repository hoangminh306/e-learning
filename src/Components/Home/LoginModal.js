import React from "react";
import FacebookLogin from "react-facebook-login";

import "./../../Assets/Styles/style.scss";

import { connect } from "react-redux";
import { Form, Formik } from "formik";
import { loginHome } from "../../Store/Actions/User";



const LoginModal = props => {
  // const [login, setLogin] = useState({
  //   isLoggedIn: false,
  //   name: "",
  //   picture: ""
  // });

  // const responseFacebook = response => {
  //   setLogin({
  //     isLoggedIn: true,
  //     name: response.name,
  //     picture: response.picture.data.url
  //   });
  // };

  return (
    <div className="modal fade modal-login-signUp modal-login" id="modalLogin">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              Log in to your Study Online account!
            </h4>
            <button
              title="Close (Esc)"
              type="button"
              className="modal-close"
              data-dismiss="modal"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            {/* <div className="social-login">
              <div className="login-facebook">
                <span className="fa fa-facebook social-icon"></span>
              </div>
              <a className="social-btn google-btn dflex" href="#home">
                <span className="social-icon">
                  <img
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                    className="social-img"
                    alt="google-icon"
                  ></img>
                </span>
                Continue with Google
              </a>
            </div> */}
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: ""
              }}
              onSubmit={values =>  {
                // console.log(values);
                
                props.dispatch(loginHome(values));
                
              }}
              render={({ handleChange }) => (
                <Form className="form-login">
                  <div className="input-container">
                    <div className="form-group">
                      <span className="fa fa-user input-icon"></span>
                      <input
                        type="text"
                        className="form-control input-login"
                        placeholder="Tài khoản"
                        name="taiKhoan"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <span className="fa fa-lock input-icon"></span>
                      <input
                        type="text"
                        className="form-control input-login"
                        placeholder="Mật khẩu"
                        name="matKhau"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="action-container">
                    <button type="submit" className="btn-logIn">
                      Log In
                    </button>
                    <span>or </span>
                    <a href="#home" className="action-fogot">
                      Fogot Password
                    </a>
                  </div>
                </Form>
              )}
            />
            <div className="modal-footer">
              <span>Don't have an account?</span>
              <a className="footer-signUp" data-toggle="modal" data-target="#modalSignUp" data-dismiss="modal">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect()(LoginModal);
