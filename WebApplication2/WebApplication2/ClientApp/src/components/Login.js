import React, { Component } from 'react';
import "./register.css"

export class Login extends Component {
    static displayName = "Login";

    constructor(props) {
        super(props);

        this.state = { User: [], loading: true };

        fetch('api/SampleData/Customer')
            .then(response => response.json())
            .then(data => {
                this.setState({ User: data, loading: false });
            });
        console.log(this.state.User);
    }

    getUser() {
        this.state.User = this.state.User.find((element) => {
            return element.customerID === 1
        });
    }

    static renderUserData(User) {
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Pronenumber</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>    
                    {User.map(user =>
                        <tr key={user.customerID}>
                            <td>{user.customerID}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.proneNumber}</td>
                            <td>{user.userName}</td>
                            <td>{user.password}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Login.renderUserData(this.state.User);
        if (!this.state.loading) {
            console.log(this.state.User);
        }
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
                    {contents}
                    {console.log(this.state.user)}
                </div>
            </div>
        );
    }

}