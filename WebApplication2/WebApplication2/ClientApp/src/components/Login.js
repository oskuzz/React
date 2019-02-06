import React, { Component } from 'react';
import "./register.css";
import { Redirect } from 'react-router-dom'

export class Login extends Component {
    static displayName = "Login";
    constructor(props) {
        super(props);

        this.state = { User: [], loading: true, un: "", pw: "", redirect: false };
        this.userName = this.userName.bind(this);
        this.passWord = this.passWord.bind(this);
        this.loginConfirmation = this.loginConfirmation.bind(this);
        this.renderUserData = this.renderUserData.bind(this);
        fetch('api/SampleData/Customer')
            .then(response => response.json())
            .then(data => {
                this.setState({ User: data, loading: false, un: "", pw: "" });

            });
    }

    getUn() {
        return this.state.un;
    }

    loginConfirmation() {
        this.state.User.map(user => {
            if (user.userName === this.state.un && user.password === this.state.pw) {
                this.state.redirect = true;
            } else {
                this.setState({ un: "", pw: "" });
            }
        }
        );
    }
    userName(e) {
        this.setState({ un: e.target.value });
    }
    passWord(e) {
        this.setState({ pw: e.target.value })
    }

    renderUserData() {
        return (
            <div>
                <h1 class="header">Login</h1>
                <form method="post">
                    <label>Username</label>
                    <input type="text" name="uName" value={this.state.un} onChange={this.userName} />
                    <label>Password</label>
                    <input type="password" name="passWord" value={this.state.pw} onChange={this.passWord} />
                </form>
                <button onClick={this.loginConfirmation}>Login</button>
                <a class="link" href="/register">Register account.</a>
            </div>
        );
    }

    renderRedirect() {
        if (this.state.redirect) {
            return (<Redirect to='/' />);
        }
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderUserData();
        return (
            <div>
                {contents}
                {this.renderRedirect()}
            </div>
        );
    }

}