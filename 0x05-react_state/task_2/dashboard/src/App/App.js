import React, {Component} from "react";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from 'aphrodite';
import { AppContext, logOut, user } from "./AppContext";

const styles = StyleSheet.create({
  App: {
    textAlign: 'center',
    position: 'relative',
    height: '100vh',
    maxWidth: '100vw',
    fontweight: 'bold',
    fontsize: '20px',
    margin: '50px',
  }
});


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

class App extends React.Component {
  state = {  }
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }
  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }
  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({ user: user });
  }
  render() { 
    const {
      user,
      user: { isLoggedIn },
      logOut,
      displayDrawer,
    } = this.state;

    const value = { user, logOut };
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logout: this.state.logOut,
        }}
      >
      <React.Fragment>
        <Notifications displayDrawer={this.state.displayDrawer} listNotifications={listNotifications}
	    handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}/>
        <div className={css(styles.App)}>
          <Header />
          {isLoggedIn ?
           (
            <BodySectionWithMarginBottom title="Course list">
                  <CourseList listCourses={listCourses} /> 
           </BodySectionWithMarginBottom>
           ): 
           (<BodySectionWithMarginBottom title="Log in to continue">
                    <Login logIn={this.logIn}/>
           </BodySectionWithMarginBottom>
           )}
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
                iste vero dolor voluptates.
              </p>
          </BodySection>
        
        <Footer />
        </div>
      </React.Fragment>
    </AppContext.Provider>
    );
  }
}
 
{/*
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};
*/}
App.contextType = AppContext;
export default App;
