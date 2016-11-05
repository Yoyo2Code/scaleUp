var React = require('react');

class HelloWorld extends React.Component {
  render() {
    return(
      <div>{this.props.word}</div>
    );
  }
}

module.exports = HelloWorld;
