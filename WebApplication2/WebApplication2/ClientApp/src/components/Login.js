import React, { Component } from 'react';
import "./register.css"

export class Login extends Component {
    static displayName = "Login";

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1 class="header">Login</h1>
                <form method="post">
                    <label>Username</label>
                    <input type="text" name="uName" />
                    <label>Password</label>
                    <input type="password" name="passWord" />
                </form>
                <button>Login</button>
                <a class="link" href="/register">Register account.</a>
            </div>
        );
    }

}