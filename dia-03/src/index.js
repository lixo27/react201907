import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ExercicioDestructuring from './ExercicioDestructuring';
import ExercicioES8Object from './ExercicioES8Object';
import ExercicioES8Pad from './ExercicioES8Pad';
import ExercicioExponenciacao from './ExercicioExponenciacao';
import ExercicioGenerators from './ExercicioGenerators';
import ExercicioIncludes from './ExercicioIncludes';
import ExercicioPromise from './ExercicioPromise';
import ExercicioRest from './ExercicioRest';
import ExercicioSpread from './ExercicioSpread';
import ExercicioStaticMethods from './ExercicioStaticMethods';

function App() {

  return (
    <div>
      <ExercicioDestructuring />
      <ExercicioES8Object />
      <ExercicioES8Pad />
      <ExercicioExponenciacao />
      <ExercicioGenerators />
      <ExercicioIncludes />
      <ExercicioPromise />
      <ExercicioRest />
      <ExercicioSpread />
      <ExercicioStaticMethods />
    </div>
  );

}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
