import React, { useEffect } from 'react';
import OwlCarousel from "react-owl-carousel3";
import './../../Assets/Styles/style.scss';

import CourseItem from './CourseItem';

import { connect } from 'react-redux';
import { fetchCoursesFromDB } from '../../Store/Actions/Course';

const IntroCourses = (props) => {

    useEffect(() => {
        props.dispatch(fetchCoursesFromDB());
    }, [])

    const _renderCoursesItemView = (data = []) => {        
        return data.map((course, index) => {
            if(course.luotXem > 10) {
                return (
                    <CourseItem key={index} course={course}/>
                )
            }
        })
    }

    const _renderCoursesItemPublic = (data = []) => {        
        return data.map((course, index) => {
            if(course.soLuongHocVien === 0) {
                return (
                    <CourseItem key={index} course={course}/>
                )
            }
        })
    }

    const _renderCoursesItemDate = (data = []) => {    
        const month = new Date().getMonth(); 
        const year = new Date().getFullYear();   
        return data.map((course, index) => {            
        var monthCourse = course.ngayTao.slice(3, 5);
        var yearCourse = course.ngayTao.slice(6, 10);

        if(parseInt(yearCourse) === year && Math.abs((month + 1) - parseInt(monthCourse)) < 2) {
                return (
                    <CourseItem key={index} course={course}/>
                )
            }             
        })       
    }

    return (
        <div className="container">
            <h3 className="modtitle"><span>KHOÁ HỌC MỚI NHẤT</span></h3>
            <OwlCarousel
                className="owl-theme mt-2"
                loop margin={30}
                nav items={4}
                navText={['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']}
            >
                
                {_renderCoursesItemDate(props.courses)}
            </OwlCarousel>
            

            <h3 className="modtitle"><span>KHOÁ HỌC TIÊU BIỂU</span></h3>
            <OwlCarousel
                className="owl-theme mt-2"
                loop margin={30}
                nav items={4}
                navText={['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']}
            >
                {_renderCoursesItemPublic(props.courses)}
            </OwlCarousel>

            <h3 className="modtitle"><span>KHOÁ HỌC XEM NHIỀU</span></h3>
            <OwlCarousel
                className="owl-theme mt-2"
                loop margin={30}
                nav items={4}
                navText={['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']}
            >
                {_renderCoursesItemView(props.courses)}
            </OwlCarousel>
        </div>

    );
};

const mapStateToProps = state => {
    return {
        courses: state.courseData.courseList
    }
}

export default connect(mapStateToProps, null)(IntroCourses);