import React, { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field } from "formik";
import UserService, { userSchema } from "../../Services/User";

const SignUpModal = () => {
  const [checked, setChecked] = useState(false);

  const _handleChecked = () => {
    setChecked(!checked); 
  }

  return (
    <div
      className="modal fade modal-login-signUp modal-signUp"
      id="modalSignUp"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Sign Up and Start Learning!</h4>
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
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maNhom: "GP01",
                email: ""
              }}
              validationSchema={userSchema}
              onSubmit={values => {
                if(checked){
                  UserService.signup(values)
                  .then(res => {
                    alert("dk thành công");
                    // this.props.history.push('/')
                  })
                  .catch(err => {
                    alert("dk không thành công");
                    console.log(err);
                  })
                } else {
                  alert("Vui lòng chấp nhận điều khoảng.");
                }             
              }}
              render={({ handleChange, errors, touched, ...formikProps }) => {
                console.log(errors);
                return (
                  <Form className="form-login">
                    <div className="input-container row">
                      <div className="col-md-6 input-container-left">
                        <div className="form-group">
                          <span className="fa fa-user input-icon"></span>
                          <Field
                            type="text"
                            name="taiKhoan"
                            onChange={handleChange}
                            className="form-control input-login"
                            placeholder="Tài khoản"
                          />
                          {errors.taiKhoan && touched.taiKhoan && (
                            <p className="alert alert-danger">
                              {errors.taiKhoan}
                            </p>
                          )}
                        </div>
                        <div className="form-group">
                          <span className="fa fa-lock input-icon"></span>
                          <input
                            type="text"
                            name="matKhau"
                            onChange={handleChange}
                            className="form-control input-login"
                            placeholder="Mật khẩu"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 input-container-right">
                        <div className="form-group">
                          <span className="fa fa-address-card input-icon"></span>
                          <input
                            type="text"
                            name="hoTen"
                            onChange={handleChange}
                            className="form-control input-login"
                            placeholder="Họ tên"
                          />
                        </div>
                        <div className="form-group">
                          <span className="fa fa-envelope input-icon"></span>
                          <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            className="form-control input-login"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <span className="fa fa-phone input-icon"></span>
                          <input
                            type="text"
                            name="soDT"
                            onChange={handleChange}
                            className="form-control input-login"
                            placeholder="Số điện thoại"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-rules">
                      <Checkbox
                        checked={checked}
                        onChange={_handleChecked}
                        value="checkedA"
                        inputProps={{
                          "aria-label": "primary checkbox"
                        }}
                      />
                      <span>
                        Yes! I want to get the most out of <b>Study Online</b>{" "}
                        by receiving emails with exclusive deals, personal
                        recommendations and learning tips!
                      </span>
                    </div>
                    <div className="action-container">
                      <button type="submit" className="btn-logIn">
                        Sign Up
                      </button>
                      <span>
                        By signing up, you agree to our Terms of Use and Privacy
                        Policy.
                      </span>
                    </div>
                  </Form>
                );
              }}
            />
            <div className="modal-line"></div>
          </div>
          <div className="modal-footer">
            <span>Already have an account?</span>
            <a className="footer-signUp" data-toggle="modal" data-target="#modalLogin" data-dismiss="modal">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
