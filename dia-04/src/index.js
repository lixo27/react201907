import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ExercicioAsync from './ExercicioAsync';
import ExercicioPromise1 from './ExercicioPromise1';

function App() {
  return (
    <div>
      <ExercicioAsync />
      <ExercicioPromise1 />
    </div>
  );
}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
