import React from 'react';
import './App.css';

function App() {

  return (
    <main role="main" class="flex-shrink-0">
      <div className="container">
        <Hello />
        <Lead />
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

export default App;
