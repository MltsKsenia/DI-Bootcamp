import React, { Component } from 'react';

class BuggyCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    handleClick = () => {
        this.setState(({ counter }) => {
            if (counter === 4) {
                throw new Error('I crashed!');
            }
            return { counter: counter + 1 };
        });
    };

    render() {
        return (
            <div>
                <h3 onClick={this.handleClick}>Click me: {this.state.counter}</h3>
            </div>
        );
    }
}

export default BuggyCounter;