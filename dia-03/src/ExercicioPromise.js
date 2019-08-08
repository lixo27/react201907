import React from 'react';

const sucesso = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve('sucesso');
  }, 3000);
});

const falha = new Promise((resolve, reject) => {
  setTimeout(function() {
    reject('falha');
  }, 5000);
});

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.sayHi = this.sayHi.bind(this);
    this.saySorry = this.saySorry.bind(this);

    sucesso.then(this.sayHi);
    falha.catch(this.saySorry);

    this.state = {
      sayHi: '',
      saySorry: ''
    };
  }

  sayHi() {
    this.setState({
      sayHi: 'just saying hi thanks to a successful promise'
    });
  }

  saySorry() {
    this.setState({
      saySorry: 'just saying sorry thanks to a failed promise'
    });
  }

  render() {
    return(
      <div>
        <h1>Exercício Promise</h1>
        <ul>
          <li>{ this.state.sayHi }</li>
          <li>{ this.state.saySorry }</li>
        </ul>
      </div>
    );
  }

}
