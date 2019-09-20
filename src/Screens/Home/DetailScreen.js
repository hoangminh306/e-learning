import React, { useEffect } from "react";
import { connect } from "react-redux";

import "../../Assets/Styles/style.scss";
import { fetchCourseDetailFromDB } from "../../Store/Actions/Course";

const DetailScreen = props => {
  const {
    hinhAnh,
    tenKhoaHoc,
    moTa,
    luotXem,
    ngayTao,
    soLuongHocVien,
  } = props.detailCourse;

  useEffect(() => {
    props.dispatch(fetchCourseDetailFromDB(props.match.params.id));
    console.log(props.match.params.id);
  }, []);

  return (
    <>
      <div className="detail__content container">
        <div className="row">
          <div className="col-6">
            <div className="detail__imgae">
              <a
                style={{ backgroundImage: `url(${hinhAnh})` }}
              ></a>
            </div>
          </div>
          <div className="col-6">
            <div className="detail__info">
              <div className="row">
                <div className="col-md-4">
                  <p className="detail__info-title">Tên khóa học:</p>
                </div>
                <div className="col-md-8">{tenKhoaHoc}</div>
                {/* <div className="col-md-4">
                  <p className="detail__info-title">Tên giảng viên:</p>
                </div>
                <div className="col-md-8">{nguoiTao}</div> */}
                <div className="col-md-4">
                  <p className="detail__info-title">Mô tả:</p>
                </div>
                <div className="col-md-8">{moTa}</div>
                <div className="col-md-4">
                  <p className="detail__info-title">Số lượng học viên:</p>
                </div>
                <div className="col-md-8">{soLuongHocVien}</div>
                <div className="col-md-4">
                  <p className="detail__info-title">Ngày tạo:</p>
                </div>
                <div className="col-md-8">{ngayTao}</div>
                <div className="col-md-4">
                  <p className="detail__info-title">Lượt xem:</p>
                </div>
                <div className="col-md-8">{luotXem}</div>
              </div>
              {/* <p>Giảng viên: {nguoiTao.hoTen}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    detailCourse: state.courseData.courseDetail
  };
};

export default connect(mapStateToProps)(DetailScreen);
