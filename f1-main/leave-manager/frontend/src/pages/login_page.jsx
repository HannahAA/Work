import React, { Component } from 'react';
import SignIn_comp from '../components/SignIn_comp';
// import { Auth } from 'aws-amplify';

class Login_page extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <SignIn_comp />
            </React.Fragment>
        );
    }
}
 
export default Login_page;