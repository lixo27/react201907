import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ExercicioArray from './ExercicioArray'

function App() {

  return (
    <div>
      <ExercicioArray />
    </div>
  );

}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
