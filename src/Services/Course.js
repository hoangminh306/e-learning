import { restConnector } from "../Connectors/Axios";

class CourseService {
  fetchCourse() {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
      method: "GET"
    });
  }

  fetchCourseDetail(courseID) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseID}`,
      method: "GET"
    });
  }

  fetchCoursesPaginationFromDB(page) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=2&MaNhom=GP01`,
      method: "GET"
    })
  }

  fetchCoursesByCategoryFromDB(category){
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${category}&MaNhom=GP01`,
      method: "GET"
    })
  }

  fetchCoursesCategoriesFromDB () {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
      method: "GET"
    })
  }
}

export default new CourseService();
