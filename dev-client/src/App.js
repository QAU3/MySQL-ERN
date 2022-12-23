import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axios.get('http://localhost:5000').then((res) => {
      console.log(res);
      this.setState({
        data: res.data,
      });
    });
  }
  render() {
    return <h1>{this.state.hola}</h1>;
  }
}

export default App;
