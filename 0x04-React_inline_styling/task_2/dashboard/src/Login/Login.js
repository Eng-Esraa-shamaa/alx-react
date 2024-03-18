import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    AppBody: {
        fontWeight: "bold",
        fontSize: "20px",
        margin: "50px",
    },
    
    label: {
        marginRight: "10px",
    },
    input: {
        margin: "10px",
      },
    button :{
        marginLeft: "5px"
    }

});

const Login = () => {
    return (
    <React.Fragment>
        <div className={css(styles.AppBody)}>
            <p>Login to access the full dashboard</p>
            <form>
            <label htmlFor="email" className={css(styles.label)}>Email:</label>
            <input type="email" id='email' name="email" autoComplete="on" className={css(styles.input)}/>
            <label htmlFor="password" className={css(styles.label)}>Password:</label>
            <input type="password" id='password' name="password" className={css(styles.input)} />
            <button className={css(styles.button)}>OK</button>
            </form>

        </div>
    </React.Fragment>
      );
}
 
export default Login;