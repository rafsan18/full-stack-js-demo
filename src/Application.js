import React, { Component } from "react";

class Application extends Component {
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
