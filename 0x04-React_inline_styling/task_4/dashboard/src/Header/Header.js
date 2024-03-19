import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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
    height: '40px',
  },
  h1: {
    color: '#e1354b',
    fontSize: '24px',
    fontWeight: 'bold',
  },

});
const Header = () => {
    return ( 
        <div className={css(styles.AppHeader)}>
        <img src={logo} alt="logo"/>
        <h1>School dashboard</h1>
      </div>
     );
}
 
export default Header;