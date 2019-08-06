import React from 'react';

class ExercicioBind extends React.Component {

  constructor(props) {
    super(props);
    this.withBind = this.withBind.bind(this);
  }

  withBind() {
    console.log(this);
  }

  withNoBind() {
    console.log(this);
  }

  withFatArrayFunction = () => {
    console.log(this);
  }

  render() {
    return(
      <div>
        <h2>Exercício Bind</h2>
        <ul>
          <li><button onClick={this.withBind}>com bind</button></li>
          <li><button onClick={this.withNoBind}>sem bind</button></li>
          <li><button onClick={this.withFatArrayFunction}>com fat array func</button></li>
        </ul>
      </div>
    );
  }

}

export default ExercicioBind;
