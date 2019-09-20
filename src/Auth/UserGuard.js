import React from "react";
import { Route, Redirect } from "react-router-dom";
import UserLayout from "../Layouts/Home/UserLayout";
import swal from 'sweetalert';
import * as Message from "../Store/Actions/Message";

const UserGuard = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("userLogin")) {
          return (
            <UserLayout>
              <Component {...props} />
            </UserLayout>
          );
        }
        swal({
          text: Message.MSG_REQUIRED_LOGIN,
          icon: "error",
          button: "OK",
        });
        return <Redirect to="/" />
      }}
    />
  );
};

export default UserGuard;