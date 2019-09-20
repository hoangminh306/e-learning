import { FETCH_COURSES, FETCH_COURSE_DETAIL, FETCH_COURSES_PAGINATION, FETCH_COURSES_CATEGORIES, FETCH_COURSES_BY_CATEGORY } from "./Type";
import CourseService from "../../Services/Course";

// async action
export const fetchCoursesFromDB = () => {
    return (dispatch) => {
        CourseService.fetchCourse()
            .then(res => {
                // console.log(res.data);

                // dispatch action lên store.
                dispatch(actFetchCourse(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const actFetchCourse = data => {
    return {
        type: FETCH_COURSES,
        payload: data
    }
}

export const fetchCourseDetailFromDB = (courseID) => {
    return (dispatch) => {
        CourseService.fetchCourseDetail(courseID)
        .then(res => {
            console.log(res.data);
            dispatch(actFetchCourseDetail(res.data));
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const actFetchCourseDetail = data => {
    return {
        type: FETCH_COURSE_DETAIL,
        payload: data
    }
}

export const fetchCoursesPagination = (page) => {
    return (dispatch) => {
        CourseService.fetchCoursesPaginationFromDB(page)
            .then(res => {
                // dispatch action lên store.
                dispatch(actFetchCoursesPagination(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const actFetchCoursesPagination = (data) => {
    return {
        type: FETCH_COURSES_PAGINATION,
        payload: data
    }
}

// load course theo danh mục
export const fetchCoursesByCategory = (category) => {
    return (dispatch) => {
        CourseService.fetchCoursesByCategoryFromDB(category)
            .then(res => {
                // dispatch action lên store.
                dispatch(actfetchCoursesByCategory(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const actfetchCoursesByCategory = (data) => {
    return {
        type: FETCH_COURSES_BY_CATEGORY,
        payload: data
    }
}

// lấy danh mục khóa học
export const fetchCoursesCategories = () => {
    return (dispatch) => {
        CourseService.fetchCoursesCategoriesFromDB()
            .then(res => {
                // dispatch action lên store.
                dispatch(actFetchCoursesCategories(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export const actFetchCoursesCategories = (data) => {
    return {
        type: FETCH_COURSES_CATEGORIES,
        payload: data
    }
}