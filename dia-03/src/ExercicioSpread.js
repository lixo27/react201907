import React from 'react';

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const arrayFinal = [
  ...array1,
  ...array2,
  ...array3
];

const arrayFinalEl = arrayFinal.map(number => {
  return <li>{ number }</li>
});

export default () => {
  return(
    <div>
      <h1>Exercício Spread</h1>
      <ul>
        { arrayFinalEl }
      </ul>
    </div>
  );
}
