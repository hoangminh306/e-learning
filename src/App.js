import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from './Screens/Home/HomeScreen';
import IntroduceScreen from './Screens/Home/IntroduceScreen';
import CoursesScreen from './Screens/Home/CoursesScreen';
import UserScreen from './Screens/Home/UserScreen';
import DetailScreen from './Screens/Home/DetailScreen';
import AdminScreen from './Screens/Admin/AdminScreen';
import LoginScreen from './Screens/Admin/LoginScreen';
import UserGuard from './Auth/UserGuard';
import AdminGuard from './Auth/AdminGuard';
import UserAdmin from './Components/Admin/UserAdmin';
import CourseAdmin from './Components/Admin/CourseAdmin';

function App() {
  return (
    <div>
      {/* <Layout/> */}
      <BrowserRouter>
        <Switch>
          <AdminGuard path="/admin/user" component={UserAdmin}/>
          <AdminGuard path="/admin/course" component={CourseAdmin}/>
          <Route path="/admin/login" component={LoginScreen}/>
          <AdminGuard path="/admin" component={AdminScreen}/>
          <UserGuard path="/user" component={UserScreen}/>
          <Route path="/introduce" component={IntroduceScreen}/>
          <Route path="/courses" component={CoursesScreen}/>
          <UserGuard path="/detail/:id" component={DetailScreen}/>
          <Route path="/" component={HomeScreen}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
