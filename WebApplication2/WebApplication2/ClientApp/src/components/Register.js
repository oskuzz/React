import React, { Component } from 'react';
import './register.css';
export class Register extends Component {
    
    static displayName = "Register";

    constructor(props) {
        super(props);
        this.state = { fName: "", lName: "", email: "", uName: "", pw: "", pNumber: "" }
        this.getEmail = this.getEmail.bind(this);
        this.getFirstName = this.getFirstName.bind(this);
        this.getLastName = this.getLastName.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.getPhoneNumber = this.getPhoneNumber.bind(this);
        this.getUserName = this.getUserName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    getFirstName(e) {
        this.setState({ fName: e.target.value })
    }
    getLastName(e) {
        this.setState({ lName: e.target.value })
    }
    getEmail(e) {
        this.setState({ email: e.target.value })
    }
    getUserName(e) {
        this.setState({ uName: e.target.value })
    }
    getPassword(e) {
        this.setState({ pw: e.target.value })
    }
    getPhoneNumber(e) {
        this.setState({ pNumber: e.target.value })
    }

    render() {
        return (
            <div>
                <h1 class="header">Register</h1>
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="fName" placeholder="Firstname" value={this.state.fName} onChange={this.getFirstName} />
                    <input type="text" name="lName" placeholder="Lastname" value={this.state.lName} onChange={this.getLastName} />
                    <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.getEmail} />
                    <input type="text" name="pNumber" placeholder="Phonenumber" value={this.state.pNumber} onChange={this.getPhoneNumber} />
                    <input type="text" name="uName" placeholder="Username" value={this.state.uName} onChange={this.getUserName} />
                    <input type="Password" name="password" placeholder="Password" value={this.state.pw} onChange={this.getPassword} />
                    <button type="submit">Register</button>
                </form>
                <a class="link" href="/login">Do you have existing account?</a>
            </div>
        );
    }
    

    onSubmit(e) {
        e.preventDefault();
        const data = new FormData();
        data.append("FirstName", this.state.fName);
        data.append("LastName", this.state.lName);
        data.append("Email", this.state.email);
        data.append("PhoneNumber", this.state.pNumber);
        data.append("UserName", this.state.uName);
        data.append("Password", this.state.pw);
        const xhr = new XMLHttpRequest();
        xhr.open('post', "api/sampleData/register", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

                console.log(":)");
            }
        }
        console.log(data);
        xhr.send(data.values);
    }
}