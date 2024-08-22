import React, { Component } from 'react';

class App extends Component {
  state = {
    message: '',
    postResponse: ''
  };

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      const data = await response.json();
      this.setState({ message: data.message });
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  handleChange = (event) => {
    this.setState({ postMessage: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postMessage: this.state.postMessage }),
      });
      const data = await response.json();
      this.setState({ postResponse: data.message });
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.postMessage || ''}
            onChange={this.handleChange}
          />
          <button type="submit">Send</button>
        </form>
        <h2>{this.state.postResponse}</h2>
      </div>
    );
  }
}

export default App;