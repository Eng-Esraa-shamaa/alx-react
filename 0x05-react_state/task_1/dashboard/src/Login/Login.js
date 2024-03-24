import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    AppBody: {
        fontWeight: "bold",
        fontSize: "20px",
        margin: "50px",
	    "@media (max-width: 900px)": {
      		display: "flex",
      		flexDirection: "column",
    	},
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
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : props.isLoggedIn,
            email : '',
            password : '',
            enableSubmit: false,
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    handleLoginSubmit(event) {
        event.preventDefault();
        this.setState({isLoggedIn: true});
    }
    handleChangeEmail(event) {
        const email = event.target.value;
        this.setState({ email });
        if (email !== "" && this.state.password !== "") 
            this.setState({ enableSubmit: true });
        else 
            this.setState({ enableSubmit: false });

    }
    handleChangePassword(event) {
        const password = event.target.value;
        this.setState({ password });
        if (this.state.email !== "" && password !== "") 
            this.setState({ enableSubmit: true });
        else 
            this.setState({ enableSubmit: false });
    }
    render() {
        return (
        <React.Fragment>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <form onSubmit={this.handleLoginSubmit}>
                    <label htmlFor="email" className={css(styles.label)}>Email:</label>
                    <input type="email" id='email' name="email" autoComplete="on" className={css(styles.input)} value={this.state.email}
                    onChange={this.handleChangeEmail}/>
                    <label htmlFor="password" className={css(styles.label)}>Password:</label>
                    <input type="password" id='password' name="password" className={css(styles.input)} 
                    value={this.state.password}
                    onChange={this.handleChangePassword}/>
                    <input type="submit" value="Ok" disabled={!this.state.enableSubmit} className={css(styles.button)} />
                </form>

            </div>
        </React.Fragment>
          );
    }
}

export default Login;
