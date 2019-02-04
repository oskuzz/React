import React, { Component } from 'react';
import "./register.css"

export class Login extends Component {
    static displayName = "Login";

    constructor(props) {
        super(props);

        this.state = { User: [] };

        fetch('api/SampleData/Customer')
            .then(response => response.json())
            .then(data => {
                this.setState({ User: data });
            });
    }

    getData() {

        this.state.User = this.state.User.find((element) => {
            return element.customerID === 1
        });

        
    }

    render() {
        let muuttuja = this.state.User;
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
                <div>

                    {console.log(toString(muuttuja[0]))}
                    {this.getData()}
                    {console.log(this.state.User)}
                </div>
            </div>
        );
    }

}