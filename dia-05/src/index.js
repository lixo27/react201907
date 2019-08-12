import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import comments from './data/comments';

const rootEl = document.getElementById('root');
ReactDOM.render(<App comments={comments} />, rootEl);
