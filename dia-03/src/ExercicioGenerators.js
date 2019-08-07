import React from 'react';

const percorreLinha477 = function*() {
  console.log('passou pela rua 1');
  yield 'rua 1';
  console.log('passou pela rua 2');
  yield 'rua 2';
  console.log('finalizou viagem');
  yield 'ponto final';
}

const PercorreLinha477El = () => {

  let trajeto = [];
  for (let parada of percorreLinha477()) {
    trajeto.push(parada);
  }

  return(
    <ul>
      { trajeto.map(parada => <li>{ parada }</li>) }
    </ul>
  );

}

export default () => {
  return(
    <div>
      <h1>Exercício Generators</h1>
      <PercorreLinha477El />
    </div>
  );
}
