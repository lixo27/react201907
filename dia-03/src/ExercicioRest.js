import React from 'react';

const summation = (total, number) => total + number;

const somaEMultiplicaPor = (multiplicador, ...valores) => {
  return multiplicador * valores.reduce(summation, 0);
};

export default () => {
  return(
    <div>
      <h1>Exercício Rest</h1>
      <ul>
        <li>{ somaEMultiplicaPor(2, 1, 2, 3) }</li>
        <li>{ somaEMultiplicaPor(3, 5, 4) }</li>
      </ul>
    </div>
  );
}
