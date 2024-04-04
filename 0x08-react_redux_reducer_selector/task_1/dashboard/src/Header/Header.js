import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
  AppHeader: {
    backgroundColor: 'white',
    borderBottom: '3px solid #e1354b',
    display: 'flex',
    alignItems: 'center',
    
    padding: '18px 24px',
    width: '100%',
  },
  logo: {
    height: '26rem',
  },
  h1: {
    color: '#e1354b',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  logoutSection: {
    display: 'block',
    marginLeft: '4rem',
    fontSize: '18px',
  }
});
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.AppHeader)}>
        <img src={logo} className={css(styles.logo)} alt="logo"/>
        <h1 className={css(styles.h1)}>School dashboard</h1>
        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            Welcome <b>{`${user.email} `}</b>
            <span onClick={logOut} className={css(styles.logoutSectionSpan)}>
              (logout)
            </span>
          </p>
        )}

      </div>

    );
  }
}
Header.contextType = AppContext;

export default Header;
