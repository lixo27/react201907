import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ExercicioDestructuring from './ExercicioDestructuring';
import ExercicioRest from './ExercicioRest';
import ExercicioSpread from './ExercicioSpread';
import ExercicioStaticMethods from './ExercicioStaticMethods';

function App() {

  return (
    <div>
      <ExercicioDestructuring />
      <ExercicioRest />
      <ExercicioSpread />
      <ExercicioStaticMethods />
    </div>
  );

}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
