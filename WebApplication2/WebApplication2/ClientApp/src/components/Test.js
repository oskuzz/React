import React, { Component } from 'react';

export class Test extends Component {
    static displayName = "Test";

    constructor(props) {
        super(props);
        this.state = { name: "" };
        this.onSubmitValue = this.onSubmitValue.bind(this);
    }

    onSubmitValue(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
                <input type="text" onChange={this.onSubmitValue} />
                <p>{this.state.name}</p>
            </div>
        );
    }
}
