import * as yup from "yup";
import React from "react";

import { restConnector } from "../Connectors/Axios";

export const userSchema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập thông tin!"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập thông tin!")
    .min(6, "Mật khẩu phải đảm bảo 6 ký tự trở lên.")
    .max(20, "Mật khẩu không được vượt quá 20 ký tự."),
  hoTen: yup
    .string()
    .required("Vui lòng nhập thông tin!")
    .matches(/^[a-zA-Z ]+$/, "Họ tên không đúng định dạng."),
  email: yup
    .string()
    .required("Vui lòng nhập thông tin!")
    .email("Email không đúng định dạng"),
  soDT: yup
    .string()
    .required("Vui lòng nhập thông tin!")
    .matches(/^[0-9]+$/, "Số điện thoại phải là kiểu số.")
});

class UserService {
  signup(user) {
    console.log(user);

    return restConnector({
      url: `/api/QuanLyNguoiDung/DangKy`,
      method: "POST",
      data: user
    });
  }

  signin(user) {
    console.log(user);

    return restConnector({
      url: `/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: user
    });
  }

  editUser(user) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: user
    })
  }

  // admin
  fetchUsersFromDB() {
    return restConnector({
      url: `/api/QuanLyNguoiDung/LayDanhSachNguoiDung`,
      method: "GET",
    });
  }

  deletehUserFromDB(taiKhoan) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
    });
  }

  addUserFromDB(user){
    console.log(user);
    return restConnector({
      url: `/api/QuanLyNguoiDung/ThemNguoiDung`,
      method: "POST",
      data: user
    })
  }
}

export default new UserService();
