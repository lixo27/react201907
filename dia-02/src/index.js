import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ExercicioArray from './ExercicioArray'
import ExercicioBind from './ExercicioBind'
import ExercicioFunctionDefaults from './ExercicioFunctionDefaults'
import ExercicioIterator from './ExercicioIterator'
import ExercicioMap from './ExercicioMap'
import ExercicioSet from './ExercicioSet'
import ExercicioState from './ExercicioState'
import ExercicioTemplateString from './ExercicioTemplateString'

function App() {

  return (
    <div>
      <ExercicioArray />
      <ExercicioBind />
      <ExercicioFunctionDefaults />
      <ExercicioIterator />
      <ExercicioMap />
      <ExercicioSet />
      <ExercicioState />
      <ExercicioTemplateString />
    </div>
  );

}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
