import React from 'react';

export default class Home extends React.Component {

  constructor() {
    super();
    this.doStuff = this.doStuff.bind(this);
  }

  doStuff() {
    this.props.addStuff({blah: 'hello world'});
  }

  render() {
    return (
      <div>
        <p>Hey!</p>
      <button onClick={this.doStuff}>Click me</button>
      </div>
    )
  }
}
