import React from "react";

import "../../Assets/Styles/style.scss";

import { connect } from "react-redux";
import { Form, Formik } from "formik";
import { loginAdmin } from "../../Store/Actions/User";

import imgAdmin from "../../Assets/images/album-2.png";

const LoginScreen = (props) => {
  return (
    <>
      <div className="main-bg">
        <div style={{ height: 50 }} />
        <div className="sub-main-w3">
          <div className="bg-content-w3pvt">
            <div className="top-content-style"><img src={imgAdmin} /></div>
            <p className="legend">
              Đăng nhập
              <span className="fa fa-hand-o-down" />
            </p>
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: ""
              }}
              onSubmit={values => {
                props.dispatch(loginAdmin(values, props.history.replace));
              }}
              render={({ handleChange }) => (
                <Form className="form-login">
                  <div className="input-container">
                    <div className="form-group input">
                      <span className="fa fa-user input-icon"></span>
                      <input
                        type="text"
                        className="form-control input-login"
                        placeholder="Tài khoản"
                        name="taiKhoan"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group input">
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
                    <button type="submit" className="btn submit">
                      Log In
                    </button>
                  </div>
                </Form>
              )}
            />
            {/* <div className="input">
                <input type="email" placeholder="Tài khoản" name="TaiKhoan" />
                <span className="fa fa-envelope" />
              </div>
              <div className="input">
                <input type="password" placeholder="Mật khẩu" name="MatKhau" />
                <span className="fa fa-unlock" />
              </div>
              <button type="submit" className="btn submit">
                <span className="fa fa-sign-in" />
              </button> */}
            {/* <a href="#" className="bottom-text-w3ls">
              Quên mật khẩu?
            </a> */}
          </div>
        </div>
        <div className="copyright">
          <h2>
            © 2019 Admin Login Form. All rights reserved | Design by
            <a target="_blank">MTN</a>
          </h2>
        </div>
      </div>
      <div className="modal fade" id="modalFail">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title"></h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect()(LoginScreen);
