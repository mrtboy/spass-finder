import React from 'react';

class App extends React.Component {
  state = {
    answer: 42,
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  }
  async componentWillMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return (
      <div>
        <h2>Hello Calls Component -- {this.state.answer}</h2>
      </div>
    );
  }
}

export default App;
