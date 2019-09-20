import React from 'react';
import { Route, Redirect } from "react-router-dom";
import AdminLayout from '../Layouts/Admin/AdminLayout';
import swal from 'sweetalert';
import * as Message from "../Store/Actions/Message";

const AdminGuard = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                const user = JSON.parse(localStorage.getItem("userLogin"));
                if (user) {
                    if (user.maLoaiNguoiDung === "HV") {
                        return (
                            <AdminLayout>
                                <Component {...props} />
                            </AdminLayout>                         
                        )
                    }
                    else {
                        swal({
                            text: Message.MSG_NOT_ADMIN,
                            icon: "error",
                            button: "OK",
                        });
                        return <Redirect to="/" />
                    }
                }
                return <Redirect to="/admin/login" />
            }}
        />
    );
};

export default AdminGuard;