import React from 'react';

const delaySuccess = function() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('sucesso');
    }, 3000);
  });
}

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.sayHi = this.sayHi.bind(this);
    this.sayHello = this.sayHello.bind(this);

    const delay = delaySuccess();
    delay.then(this.sayHi);
    delay.then(this.sayHello);

    this.state = {
      sayHi: '',
      sayHello: ''
    };
  }

  sayHi() {
    this.setState({
      sayHi: 'just saying hi thanks to a successful promise'
    });
  }

  sayHello() {
    this.setState({
      sayHello: 'just saying hello thanks to a successful promise'
    });
  }

  render() {
    return(
      <div>
        <h1>Exercício Promise 1</h1>
        <ul>
          <li>{ this.state.sayHi }</li>
          <li>{ this.state.sayHello }</li>
        </ul>
      </div>
    );
  }

}
