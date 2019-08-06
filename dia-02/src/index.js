import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ExercicioArray from './ExercicioArray'
import ExercicioIterator from './ExercicioIterator'
import ExercicioMap from './ExercicioMap'
import ExercicioSet from './ExercicioSet'

function App() {

  return (
    <div>
      <ExercicioArray />
      <ExercicioIterator />
      <ExercicioMap />
      <ExercicioSet />
    </div>
  );

}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
