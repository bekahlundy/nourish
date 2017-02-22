import React from 'react';
import Form from './Form';
import Display from './Display';

export default class Home extends React.Component {

  // constructor() {
  //   super();
  //   this.doStuff = this.doStuff.bind(this);
  // }
  //
  // doStuff() {
  //   this.props.addStuff({blah: 'hello world'});
  // }

  render() {
    return (
      <div>
        <p>Hey!</p>
        <Form />
        <Display />
      {/* <button onClick={this.doStuff}>Click me</button> */}
      </div>
    )
  }
}
