import React, { Component } from "react";

class Application extends Component {
    constructor(props) {
        super();

        this.state = {
            count: 0,
        };
    }
    handleClick = () => {
        console.log("object");
    };
    render() {
        let { count } = this.state;
        return (
            <div>
                <h1>You Clicked the Button-1: {count} times</h1>
                <button onClick={() => this.handleClick()}>button-1</button>
            </div>
        );
    }
}

export default Application;
