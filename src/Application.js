import React, { Component } from "react";

class Application extends Component {
    constructor(props) {
        super();

        this.state = {
            grossCount: 0,
            incrementCount: 0,
            decrementCount: 0,
        };
    }

    handleIncrement = () => {
        this.setState({
            grossCount: this.state.grossCount + 1,
            incrementCount: this.state.incrementCount + 1,
        });
    };

    handleDecrement = () => {
        this.setState({
            grossCount: this.state.grossCount - 1,
            decrementCount: this.state.decrementCount + 1,
        });
    };

    render() {
        let { grossCount, incrementCount, decrementCount } = this.state;
        return (
            <div>
                <h1>This is Class component</h1>

                <h2>You Click: {grossCount} times</h2>
                <h3>Increment Count: {incrementCount}</h3>
                <h3>Decrement Count: {decrementCount}</h3>

                <button onClick={() => this.handleIncrement()}>
                    Increment
                </button>

                <button onClick={() => this.handleDecrement()}>
                    Decrement
                </button>
            </div>
        );
    }
}

export default Application;
