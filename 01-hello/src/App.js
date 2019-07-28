import React from 'react';
import './App.css';

function App() {

  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <Hello />
        <Lead />
        <Form />
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
    
    return(
      <form>
        <div className="form-label-group">
          <label htmlFor="inputName">{ nameLabel }</label>
          <input className="form-control" name="inputName" id="inputName" type="text" />
        </div>
      </form>
    );
  }
}

export default App;
