import React, {useState} from "react";
import "./App.css";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";





const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 }

];
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

function App({isLoggedIn}) {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  return (
    <React.Fragment>
      
      <Notifications displayDrawer={displayDrawer} listNotifications={listNotifications} />

      <div className="App">
        <Header/>
        {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses}/>}
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
