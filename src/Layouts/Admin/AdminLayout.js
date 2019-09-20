import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import $ from "jquery";

import logo from "../../Assets/images/logo.png";

const AdminLayout = (props) => {

    useEffect(() => {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    })

    return (
        <>
            <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header">
                    <img className="admin__logo" src={logo} alt="img" />
                    <strong>TMN</strong>
                </div>
                <ul className="list-unstyled components">
                    <li className="active">
                        <Link to="/admin">
                            <i className="fa fa-line-chart" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/user">
                            <i className="fa fa-user" />
                            Người dùng
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/course">
                            <i className="fa fa-book" />
                            Khóa học
                        </Link>
                    </li>
                </ul>
            </nav>
            <div id="content">
                {/* <Header></Header> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button type="button" id="sidebarCollapse" className="btn btn-info">
                            <i className="fa fa-bars" />
                        </button>
                        <button
                            className="btn btn-dark d-inline-block d-lg-none ml-auto"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-align-justify" />
                        </button>
                    </div>
                </nav>
                <div className="container">
                {props.children}
                </div>
            </div>
        </div>

        </>
    );
};

export default AdminLayout;