import React, { Component } from "react";

class Application extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(props, state) {
        console.log("Component will mount", props, state);
    }

    componentDidMount(props, state) {
        console.log("Mounted with", props, state);
    }

    componentWillReceiveProps(props) {
        console.log("Component will receive props", props);
    }

    componentWillUpdate(props, state) {
        console.log("component will update", props, state);
    }
    render() {
        let name = "John";
        return (
            <div>
                <h1>Hello {name}!!</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio dolores qui excepturi magnam consectetur blanditiis
                    doloremque praesentium distinctio iusto in?
                </p>
            </div>
        );
    }
}

export default Application;
