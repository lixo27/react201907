import React from 'react';

const delaySuccess = function() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('success');
    }, 3000);
  });
}

const delayError = function() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      reject('error');
    }, 5000);
  });
}

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.sayHi = this.sayHi.bind(this);
    this.saySorry = this.saySorry.bind(this);

    this.sayHi();
    this.saySorry();

    this.state = {
      sayHi: '',
      saySorry: ''
    };
  }

  async sayHi() {

    await delaySuccess();

    this.setState({
      sayHi: 'just saying hi thanks to a successful promise'
    });

  }

  async saySorry() {

    try {

      await delayError();

    } catch(error) {

      this.setState({
        saySorry: 'just saying sorry thanks to a rejected promise'
      });

    }

  }

  render() {
    return(
      <div>
        <h1>Exercício Async</h1>
        <ul>
          <li>{ this.state.sayHi }</li>
          <li>{ this.state.saySorry }</li>
        </ul>
      </div>
    );
  }

}
