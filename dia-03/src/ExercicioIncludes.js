import React from 'react';

const numeros = [1, 2, 3];

const includesYes = numeros.includes(3) ? 'yes' : 'no';
const includesNo = numeros.includes(6) ? 'yes' : 'no';

export default () => {
  return(
    <div>
      <h1>Exercício Includes</h1>
      <ul>
        <li>{ includesYes }</li>
        <li>{ includesNo }</li>
      </ul>
    </div>
  );
}
