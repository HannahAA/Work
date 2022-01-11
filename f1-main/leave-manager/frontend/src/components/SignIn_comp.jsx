import React, { Component } from 'react';

class SignIn_comp extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <form action="#" className="login">
                    <h3>Username:</h3>
                    <input type="text" className="login_username" placeholder="Your email ID" />
                    <h3>Password:</h3>
                    <input type="password" className="login_password" placeholder="Your password" />
                </form>
            </React.Fragment>
        );
    }
}
 
export default SignIn_comp;