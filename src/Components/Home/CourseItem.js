import React from "react";
import {Link} from "react-router-dom";

import './../../Assets/Styles/style.scss';

const CourseItem = (props) => {    
    const {tenKhoaHoc, hinhAnh, luotXem, soLuongHocVien, maKhoaHoc} = props.course;

    return (
        <>
            <div className="item">
                <div className="course">
                    <div className="course__item">
                        <div className="course__view">
                            <Link to={`/detail/${maKhoaHoc}`}>
                                <img src={hinhAnh} alt="img" />
                            </Link>
                        </div>
                        <div className="course__content">
                            <h4 className="course__title">
                                <Link to={`/detail/${maKhoaHoc}`}>{tenKhoaHoc}</Link>
                            </h4>
                            <ul className="rating">
                                <li>
                                    <i className="fa fa-star" />
                                </li>
                                <li>
                                    <i className="fa fa-star" />
                                </li>
                                <li>
                                    <i className="fa fa-star" />
                                </li>
                                <li>
                                    <i className="fa fa-star" />
                                </li>
                                <li>
                                    <i className="fa fa-star" />
                                </li>
                            </ul>
                            <div className="text-center">
                                Giảng viên:{" "}
                                <span className="course__teacher">Chế Công Bình</span>
                            </div>
                            <div className="course__footer d-flex">
                                <div className="coure__member">
                                    <i className="fa fa-users" />
                                    <span>{soLuongHocVien}</span>
                                </div>
                                <div className="coure__seen">
                                    <i className="fa fa-eye" />
                                    <span>{luotXem} lượt xem</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseItem;
