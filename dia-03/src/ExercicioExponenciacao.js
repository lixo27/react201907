import React from 'react';

const resultado1 = 2 ** 4;

let resultado2 = 4;
resultado2 **= 3;

export default () => {
  return(
    <div>
      <h1>Exercício Exponenciação</h1>
      <ul>
        <li>{ resultado1 }</li>
        <li>{ resultado2 }</li>
      </ul>
    </div>
  );
}
