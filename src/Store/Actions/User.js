import { FETCH_USER_LOGIN, EDIT_USER, LOGOUT, FETCH_USERS, DELETE_USER, ADD_USER } from "../../Store/Actions/Type"

import UserService from "../../Services/User";
import { restConnector } from "../../Connectors/Axios";

import * as Message from "../../Store/Actions/Message";
import swal from 'sweetalert';

// user login
export const loginHome = (values) => {
    return dispatch => {
        UserService.signin(values)
            .then(res => {
                // console.log(res);
                localStorage.setItem('userLogin', JSON.stringify(res.data));
                // Gắn token vào tất cả request
                restConnector.defaults.headers["Authorization"] = `Bearer ${res.data.accessToken}`
                // dispatch action lưu login user lên store.
                dispatch(actFetchLoginUser(res.data));

                swal({
                    text: Message.MSG_SIGNIN_SUCCESS,
                    icon: "success",
                    button: "OK",
                  });
            })
            .catch(err => {

                swal({
                    text: Message.MSG_SIGNIN_FAIL,
                    icon: "error",
                    button: "OK",
                  });
                console.log(err.message);
            });
    }
}


// admin login
export const loginAdmin = (values, replace) => {
    return dispatch => {
        UserService.signin(values)
            .then(res => {
                if(res.data.maLoaiNguoiDung === "HV"){
                    localStorage.setItem('userLogin', JSON.stringify(res.data));
                    // Gắn token vào tất cả request
                    restConnector.defaults.headers["Authorization"] = `Bearer ${res.data.accessToken}`
                    // dispatch action lưu login user lên store.
                    dispatch(actFetchLoginUser(res.data));
                    replace("/admin");
                }else {
                    swal({
                        text: Message.MSG_NOT_ADMIN,
                        icon: "error",
                        button: "OK",
                      });
                }
                
            })
            .catch(err => {
                swal({
                    text: Message.MSG_SIGNIN_FAIL,
                    icon: "error",
                    button: "OK",
                  });
                console.log(err.message);
            });
    }
}

export const actFetchLoginUser = (user) => ({
    type: FETCH_USER_LOGIN,
    payload: { user }
})


// edit user
export const editUserDB = (user) => {
    return dispatch => {
        UserService.editUser(user)
        .then(res => {
            dispatch(actEditUser(res.data));
            swal({
                text: Message.MSG_EDIT_SUCCESS,
                icon: "success",
                button: "OK",
              });
        })
        .catch(err => {
            swal({
                text: Message.MSG_EDIT_FAIL,
                icon: "error",
                button: "OK",
              });
            console.log(err);
        })
    }
}

export const actEditUser = (user) => ({
    type: EDIT_USER,
    payload: { user }
})


// user logout
export const actLogout = () => ({
    type: LOGOUT
})


// fetch users 
export const fetchUsers = () => {
    return dispatch => {
        UserService.fetchUsersFromDB()
        .then(res => {
            dispatch(actFetchUsers(res.data));          
        })
        .catch(err => {       
            console.log(err);
        })
    }
}

export const actFetchUsers = (users) => ({
    type: FETCH_USERS,
    payload: { users }
})

// delete user
export const deleteUser = (user) => {
    debugger
    return dispatch => {
        UserService.deletehUserFromDB(user.taiKhoan)
        .then(res => {
            dispatch(actFetchUsers(res.data));     
            restConnector.defaults.headers["Authorization"] = `Bearer ${res.data.accessToken}`
            swal({
                text: Message.MSG_DELETE_SUCCESS,
                icon: "success",
                button: "OK",
              });     
        })
        .catch(err => {     
            swal({
                text: Message.MSG_DELETE_FAIL,
                icon: "error",
                button: "OK",
              });  
            console.log(err);
        })
    }
}

export const actDeleteUser = (user) => ({
    type: DELETE_USER,
    payload: {user}
})

export const addUser = (user) => {
    return dispatch => {
        debugger
        UserService.addUserFromDB(user)
        .then(res => {
            dispatch(actAddUser(res.data));     
            swal({
                text: Message.MSG_ADD_SUCCESS,
                icon: "success",
                button: "OK",
              });     
        })
        .catch(err => {     
            swal({
                text: Message.MSG_ADD_FAIL,
                icon: "error",
                button: "OK",
              });  
            console.log(err);
        })
    }
}

export const actAddUser = (user) => ({
    type: ADD_USER,
    payload: {user}

})

