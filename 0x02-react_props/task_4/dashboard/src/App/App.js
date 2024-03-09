import React from "react";
import "./App.css";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';


function App({isLoggedIn}) {
  return (
    <React.Fragment>
      
        <Notifications />
      <div className="App">
        <Header/>
        {!isLoggedIn ? <Login /> : <CourseList />}
      </div>

        
        
        <Footer/>
      
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false
};

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default App;
