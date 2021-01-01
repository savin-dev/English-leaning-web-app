import React, { Component } from 'react';

export class Login extends Component {
    constructor(props){
        super(props);
        this.state={
        name : 'Savin',
        girl : 'Oneli'
        }    
    }
    render() {
        return (
            <div>
                <h1>{this.state.name} loves {this.state.girl}</h1>
            </div>
        );
    }
}

export default Login;