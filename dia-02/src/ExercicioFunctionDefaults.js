import React from 'react';

const hello = function(firstName, secondName = 'Senna') {
  return <li>Hello, {firstName} {secondName}</li>
}

export default function() {
  return(
    <div>
      <h2>Exercício Function Defaults</h2>
      <ul>
        {hello('Thiago')}
      </ul>
    </div>
  );
}
