import React, { Component } from 'react';

class FavoriteColorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor: 'red' };
    }

    changeColor = () => {
        this.setState({ favoriteColor: 'blue' });
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' });
        }, 3000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true; // if it will be 'false' the color will not change
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('in getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('after update');
    }

    render() {
        return (
            <div>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change color to blue</button>
            </div>
        );
    }
}

export default FavoriteColorComponent;
