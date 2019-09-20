
import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_COURSES_PAGINATION, FETCH_COURSES_BY_CATEGORY, FETCH_COURSES_CATEGORIES } from '../Actions/Type';

let initialState = {
    courseList: [
        {
            tenKhoaHoc: "lap trinh c++",
            manNhom: "GP01",
            maKhoaHoc: "LTC_GP01",
            hinhAnh: "http://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-c-.jpg",
            luotXem: 10,
            ngayTao: "01/08/2019",
            soLuongHocVien:0
        }
    ],

    courseDetail: {
        tenKhoaHoc: "c++",
            manNhom: "GP01",
            maKhoaHoc: "LTC_GP01",
            hinhAnh: "http://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-c-.jpg",
            luotXem: 10,
            ngayTao: "01/08/2019",
            soLuongHocVien:0
    },

    coursesCategory: []
};

const CourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COURSES: {
            //state = action.payload;
            //return {...state}
            return { ...state, courseList: action.payload };
        }
        case FETCH_COURSE_DETAIL: {
            return { ...state, courseDetail: action.payload };
        }

        case FETCH_COURSES_PAGINATION: {
            return { ...state, courseList: action.payload.items};
        }

        case FETCH_COURSES_BY_CATEGORY: {
            return { ...state, courseList: action.payload };
        }

        case FETCH_COURSES_CATEGORIES: {
            return { ...state, coursesCategory: action.payload };
        }

        default:
            return state;
    }
};
export default CourseReducer;
