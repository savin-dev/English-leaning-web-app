import React, { Component } from 'react';
import './Login/LoginStyle.css';

export class Login extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //     }    
    // }

    render() {
        return (
            <div className="container">
                <div>
                    <title>Login Page</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
                    <link rel="stylesheet" type="text/css" href="styles.css" />
                    <h1> -</h1>
                        <div className="container">
                            <div className="d-flex justify-content-center h-100">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>Sign In</h3>
                                        <div className="d-flex justify-content-end social_icon">
                                            <span><i className="fab fa-facebook-square" /></span>
                                            <span><i className="fab fa-google-plus-square" /></span>
                                            <span><i className="fab fa-twitter-square" /></span>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                    <form>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-user" /></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="username" />
                                        </div>
                                        <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key" /></span>
                                        </div>
                                            <input type="password" className="form-control" placeholder="password" />
                                        </div>
                                        <div className="row align-items-center remember">
                                            <input type="checkbox" />Remember Me
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" defaultValue="Login" className="btn float-right login_btn" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Don't have an account?<a href="#">Sign Up</a>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <a href="#">Forgot your password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
