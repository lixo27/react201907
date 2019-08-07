import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ExercicioRest from './ExercicioRest';
import ExercicioSpread from './ExercicioSpread';

function App() {

  return (
    <div>
      <ExercicioRest />
      <ExercicioSpread />
    </div>
  );

}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
