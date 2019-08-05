import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {

  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <Hello />
        <Lead />
        <hr />
        <Form />
        <hr />
        <List />
      </div>
    </main>
  );

}

class Hello extends React.Component {
  render() {
    const hello = 'hello, world!';

    return (
      <h1 className="mt-5">{ hello }</h1>
    );
  }
}

class Lead extends React.Component {
  render() {
    const lead = 'Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS.';

    return (
      <p className="lead">{ lead }</p>
    );
  }
}

class Form extends React.Component {
  render() {
    const nameLabel = 'Your Name';

    return (
      <form>
        <div className="form-label-group">
          <label htmlFor="inputName">{ nameLabel }</label>
          <input className="form-control" name="inputName" id="inputName" type="text" />
        </div>
      </form>
    );
  }
}

class List extends React.Component {
  render() {
    const people = [
      { id: 1, nome: 'Maria', idade: 27 },
      { id: 2, nome: 'Thiago', idade: 28 },
      { id: 3, nome: 'Fabiana', idade: 25 },
    ];

    const listItems = people.map(function(person) {
      return <li key={ person.id }>{ person.nome } - { person.idade } anos</li>
    });

    return <ul>{ listItems }</ul>;
  }
}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
