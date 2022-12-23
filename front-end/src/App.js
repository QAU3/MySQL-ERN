import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axios.get('http://127.0.0.1:5000/novice').then((res) => {
      console.log(res);
      this.setState({
        data: res.data,
      });
    });
  }
  render() {
    return <h1>{this.state.data}</h1>;
  }
}

export default App;
