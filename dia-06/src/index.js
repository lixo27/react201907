import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {

  const user = { username: 'Thiago' };

  const posts = [
    { author: { username: 'Fabiana' }, body: 'Beautiful day in Portland!' },
    { author: { username: 'Thiago' }, body: 'The Avengers movie was so cool!' }
  ];

  const postsEl = posts.map((post, key) => {
      return <div key={key}><p>{ post.author.username } says: <strong>{ post.body }</strong></p></div>
  });

  return (
    <div>
      <h1>Hello, { user.username }!</h1>
      { postsEl }
    </div>
  );

}

const rootEl = document.getElementById('root');
ReactDOM.render(<App />, rootEl);
