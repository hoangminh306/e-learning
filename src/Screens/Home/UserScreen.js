import React, { useEffect } from "react";

import user_img from "../../Assets/images/user-img.PNG";

import { connect } from "react-redux";
import { actFetchLoginUser, editUserDB } from "../../Store/Actions/User";
import { restConnector } from "../../Connectors/Axios";

import TextField from "@material-ui/core/TextField";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";

const UserScreen = (props) => {

  useEffect(() => {
    const userInfo = localStorage.getItem("userLogin");
    if (userInfo) {
      props.dispatch(actFetchLoginUser(JSON.parse(userInfo)));
      restConnector.defaults.headers["Authorization"] = `Bearer ${
        JSON.parse(userInfo).accessToken
        }`;
    }
  }, [])

  return (
    <>
      <div className="user__content">
        <ul className="nav nav-tabs user-nav">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#joiningCourse">
              <span>Đã tham gia</span>
              <div className="layer"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#profile">
              <span>Thông tin cá nhân</span>
              <div className="layer"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#editProfile">
              <span>Cập nhật thông tin</span>
              <div className="layer"></div>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#changePassword">
              <span>Đổi mật khẩu</span>
              <div className="layer"></div>
            </a>
          </li>
        </ul>
        {props.userInfo && (
          <div className="tab-content user-tab">
            <div className="tab-pane container joiningCourse__content" id="joiningCourse">
              <div className="joiningCourse__item">
                {/* <CourseItem/> */}
              </div>
            </div>
            <div className="tab-pane active container profile__content" id="profile">
              <div className="user__profile row">
                <div className="col-md-4 user__profile-left">
                  <img className="user__profile-img" src={user_img} alt="user image"></img>
                </div>
                <div className="col-md-8 user__profile-right">
                  <h5 className="user__profile-title">
                    Thông tin cá nhân: {props.userInfo.hoTen}
                  </h5>
                  <div className="row mb-2">
                    <div className="col-sm-3"><span>Tên tài khoản:</span></div>
                    <div className="col-sm-9">
                      <span>
                        {props.userInfo.taiKhoan}
                      </span>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-sm-3"><span>Email:</span></div>
                    <div className="col-sm-9"><span> {props.userInfo.email}</span></div>
                  </div>
                  <div className="row">
                    <div className="col-sm-3"><span>Số điện thoại:</span></div>
                    <div className="col-sm-9"><span> {props.userInfo.soDT}</span></div>
                  </div>
                </div>

              </div>
            </div>
            <div className="tab-pane container editProfile__content" id="editProfile">
              <Formik
                initialValues={{
                  taiKhoan: props.userInfo.taiKhoan,
                  email: props.userInfo.email,
                  soDT: props.userInfo.soDT,
                  hoTen: props.userInfo.hoTen,
                  maLoaiNguoiDung: props.userInfo.maLoaiNguoiDung,
                  maNhom: "GP01"
                }}
                onSubmit={values => {
                  props.dispatch(editUserDB(values));
                  console.log(values);
                }}
                render={({ handleChange }) => (
                  <Form>
                    <h5 className="editProfile__title">
                      Cập nhật thông tin cá nhân
                    </h5>
                    <div className="row">
                      <div className="col-md-12 editProfile__col">
                        <TextField
                          id="standard-name"
                          className="editProfile__input"
                          label="Họ tên"
                          defaultValue={props.userInfo.hoTen}
                          name="hoTen"
                          onChange={handleChange}
                          variant="standard"
                        />
                      </div>
                      <div className="col-md-12 editProfile__col">
                        <TextField
                          id="standard-name"
                          className="editProfile__input"
                          label="Email"
                          defaultValue={props.userInfo.email}
                          name="email"
                          onChange={handleChange}
                          variant="standard"
                        />
                      </div>
                      <div className="col-md-12 editProfile__col">
                        <TextField
                          id="standard-name"
                          className="editProfile__input"
                          label="Số điện thoại"
                          defaultValue={props.userInfo.soDT}
                          name="soDT"
                          onChange={handleChange}
                          variant="standard"
                        />
                      </div>
                      <div className="col-md-12">
                        <Button
                          variant="contained"
                          color="secondary"
                          className="editProfile__btn"
                          type="submit"
                        >
                          Cập nhật
                        </Button>
                      </div>
                    </div>
                  </Form>
                )}
              />
            </div>
            <div className="tab-pane container" id="changePassword">
              4
          </div>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.user.userLogin
  }
}

export default connect(mapStateToProps, null)(UserScreen);
