import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ExercicioAsync from './ExercicioAsync';
import ExercicioPromise1 from './ExercicioPromise1';
import ExercicioProxy from './ExercicioProxy';

function App() {
  return (
    <div>
      <ExercicioAsync />
      <ExercicioPromise1 />
      <ExercicioProxy />
    </div>
  );
}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
