import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import CourseReducer from "./CourseReducer";

const RootReducer = combineReducers({
    user: UserReducer,
    courseData: CourseReducer
});

export default RootReducer;
