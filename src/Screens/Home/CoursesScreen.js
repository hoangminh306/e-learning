import React, { useEffect, useState } from "react";
import Header from "../../Layouts/Home/Header";
import Footer from "../../Layouts/Home/Footer";
import CourseItem from "../../Components/Home/CourseItem";
import { connect } from "react-redux";
import { fetchCoursesFromDB, fetchCoursesPagination } from '../../Store/Actions/Course';
import Contact from "../../Components/Home/Contact";
import Pagination from "../../Components/Home/Pagination";
const CoursesScreen = (props) => {

  const [page, setPage] = useState(1);

  console.log(page);

  useEffect(() => {
    // props.dispatch(fetchCoursesFromDB());
    props.dispatch(fetchCoursesPagination(page));
  }, [page])

  const _renderCourses = (data = []) => {
    return data.map((course, index) => {
      return (
        <div className="col-md-4" key={index}>
          <CourseItem course={course} />
        </div>
      );
    });
  };

  const _handleFilter = (filterName) => {
    console.log(filterName);
  }

  return (
    <>
      <Header />
      <div className="container filterCourses__Screen">
        <div className="row">
          <div className="col-md-3 filter__container">
            <div className="course__filter">
              <h3 className="course__filter-title">
                <span>LỌC</span>
              </h3>
              <ul className="list-group">
                <li className="list-group-item" onClick={() => _handleFilter("New")}>
                  <a >Mới nhất</a>
                </li>
                <li className="list-group-item" onClick={() => _handleFilter("Popular")}>
                  <a>Phổ biến</a>
                </li>
                <li className="list-group-item" onClick={() => _handleFilter("interested")}>
                  <a >Quan tâm</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 courses__container">
            <div className="row">
              {_renderCourses(props.courses)}
            </div>
            <Pagination
              total={props.courses}
              currentPage={page}
              pageSize={props.courses.length}
              onChangePage={page => setPage(props.dispatch(fetchCoursesPagination(page)))}
              // onChangePage={page => setPage((page))}
            />
          </div>
        </div>
      </div>
      <Contact/>
      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  return {
    courses: state.courseData.courseList
  };
};

export default connect(mapStateToProps)(CoursesScreen);
