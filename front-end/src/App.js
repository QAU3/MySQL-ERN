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
    axios.get('https://qau3-super-duper-guacamole-697pqjvjxr5f5q9v-5000.preview.app.github.dev/novice', {credentials: 'include'})
    .then((res) => {
      console.log(res);
      this.setState({
        data: res.data,
      });
    });
  }
  render() {
    return <h1>Hello</h1>;
  }
}

export default App;
