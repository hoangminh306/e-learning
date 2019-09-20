import React, { useEffect } from "react";
import $ from "jquery";

const Header = () => {
    useEffect(() => {
        $(".search-box a, .search-box .app-search .srh-btn").on("click", function () {
            $(".app-search").slideToggle(200);
        })
    })

    return (
        <>
            <div className="header">
                <nav className="navbar top-navbar navbar-expand-md navbar-light">
                    <div className="navbar-collapse">
                        {/* <ul className="navbar-nav mr-auto mt-md-0"></ul> */}
                        <ul className="navbar-nav my-lg-0">
                            <li className="nav-item hidden-sm-down search-box">
                                {" "}
                                <a
                                    className="nav-link hidden-sm-down text-muted  "
                                >
                                    <i className="fa fa-search" />
                                </a>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search here"
                                />{" "}
                                <a className="srh-btn">
                                    <i className="fa fa-close" />
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-muted text-muted  "
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {" "}
                                    <i className="fa fa-bell" />
                                    <div className="notify">
                                        {" "}
                                        <span className="heartbit" /> <span className="point" />{" "}
                                    </div>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right mailbox animated zoomIn">
                                    <ul>
                                        <li>
                                            <div className="drop-title">Notifications</div>
                                        </li>
                                        <li>
                                            <div className="message-center">
                                                <a href="#">
                                                    <div className="btn btn-danger btn-circle m-r-10">
                                                        <i className="fa fa-link" />
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>This is title</h5>{" "}
                                                        <span className="mail-desc">
                                                            Just see the my new admin!
                                                        </span>{" "}
                                                        <span className="time">9:30 AM</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="btn btn-success btn-circle m-r-10">
                                                        <i className="fa fa-calendar" />
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>This is another title</h5>{" "}
                                                        <span className="mail-desc">
                                                            Just a reminder that you have event
                                                        </span>{" "}
                                                        <span className="time">9:10 AM</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="btn btn-info btn-circle m-r-10">
                                                        <i className="fa fa-wrench" />
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>This is title</h5>{" "}
                                                        <span className="mail-desc">
                                                            You can customize this template as you want
                                                        </span>{" "}
                                                        <span className="time">9:08 AM</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="btn btn-primary btn-circle m-r-10">
                                                        <i className="fa fa-user" />
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>This is another title</h5>{" "}
                                                        <span className="mail-desc">
                                                            Just see the my admin!
                                                        </span>{" "}
                                                        <span className="time">9:02 AM</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                className="nav-link text-center"
                                            >
                                                {" "}
                                                <strong>Check all notifications</strong>{" "}
                                                <i className="fa fa-angle-right" />{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-muted  "
                                    href="#"
                                    id={2}
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {" "}
                                    <i className="fa fa-envelope" />
                                    <div className="notify">
                                        {" "}
                                        <span className="heartbit" /> <span className="point" />{" "}
                                    </div>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right mailbox animated zoomIn"
                                    aria-labelledby={2}
                                >
                                    <ul>
                                        <li>
                                            <div className="drop-title">You have 4 new messages</div>
                                        </li>
                                        <li>
                                            <div className="message-center">
                                                <a href="#">
                                                    <div className="user-img">
                                                        {" "}
                                                        <img
                                                            src="../../../assets/images/user.jpg"
                                                            alt="user"
                                                            className="img-circle"
                                                        />{" "}
                                                        <span className="profile-status online pull-right" />{" "}
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>Michael Qin</h5>{" "}
                                                        <span className="mail-desc">
                                                            Just see the my admin!
                                                        </span>{" "}
                                                        <span className="time">9:30 AM</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img">
                                                        {" "}
                                                        <img
                                                            src="../../../assets/images/user.jpg"
                                                            alt="user"
                                                            className="img-circle"
                                                        />{" "}
                                                        <span className="profile-status busy pull-right" />{" "}
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>John Doe</h5>{" "}
                                                        <span className="mail-desc">
                                                            I've sung a song! See you at
                                                        </span>{" "}
                                                        <span className="time">9:10 AM</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img">
                                                        {" "}
                                                        <img
                                                            src="../../../assets/images/user.jpg"
                                                            alt="user"
                                                            className="img-circle"
                                                        />{" "}
                                                        <span className="profile-status away pull-right" />{" "}
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>Mr. John</h5>{" "}
                                                        <span className="mail-desc">I am a singer!</span>{" "}
                                                        <span className="time">9:08 AM</span>
                                                    </div>
                                                </a>
                                                <a href="#">
                                                    <div className="user-img">
                                                        {" "}
                                                        <img
                                                            src="../../../assets/images/user.jpg"
                                                            alt="user"
                                                            className="img-circle"
                                                        />{" "}
                                                        <span className="profile-status offline pull-right" />{" "}
                                                    </div>
                                                    <div className="mail-contnet">
                                                        <h5>Michael Qin</h5>{" "}
                                                        <span className="mail-desc">
                                                            Just see the my admin!
                                                        </span>{" "}
                                                        <span className="time">9:02 AM</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <a
                                                className="nav-link text-center"
                                            >
                                                {" "}
                                                <strong>See all e-Mails</strong>{" "}
                                                <i className="fa fa-angle-right" />{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle text-muted  "
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <img
                                        src="../../../assets/images/user.jpg"
                                        alt="user"
                                        className="profile-pic"
                                    />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right animated zoomIn">
                                    <ul className="dropdown-user">
                                        <li data-toggle="modal" data-target="#modalNguoiDung">
                                            <a>
                                                <i className="fa fa-user pr-2" />
                                                Thông tin
                                            </a>
                                        </li>
                                        <li data-toggle="modal" data-target="#modalDoiMatKhau">
                                            <a>
                                                <i className="fa fa-wrench pr-2" />
                                                Đổi mật khẩu
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="fa fa-power-off pr-2" />
                                                Đăng xuất
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="modal fade modalAccount" id="modalNguoiDung">
                <div className="modal-dialog">
                    <div className="modal-content modal-dang-ky">
                        <div className="modal-header">
                            <h4 className="modal-title">Thông tin người dùng</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="TaiKhoan"
                                        className="form-control"
                                        placeholder="Tài khoản"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Họ tên"
                                        name="HoTen"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Email"
                                        name="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Số điện thoại"
                                        name="SoDT"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-modal">
                                    Cập nhật
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade modalAccount" id="modalDoiMatKhau">
                <div className="modal-dialog">
                    <div className="modal-content modal-dang-ky">
                        <div className="modal-header">
                            <h4 className="modal-title">Đổi mật khẩu</h4>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Mật khẩu hiện tại"
                                        name="MatKhau"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Mật khẩu mới"
                                        name="MatKhauMoi"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-modal">
                                    Cập nhật
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade loginFail" id="modalAlert">
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

export default Header;
