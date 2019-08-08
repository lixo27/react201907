import React from 'react';

const percorreLinha477 = function*() {
  console.log('passou pela rua 1');
  yield 'rua 1';
  console.log('passou pela rua 2');
  yield 'rua 2';
  console.log('finalizou viagem');
  yield 'ponto final';
}

const equipeDev = {
  senior: 'Thiago',
  pleno: 'Lucas',
  junior: 'Fabiana',
  quantidade: 3,
  [Symbol.iterator]: function* () {
    yield this.senior;
    yield this.pleno;
    yield this.junior;
  }
}

const equipeVendas = {
  gerente: 'Valeria',
  vendedor: 'Karina',
  quantidade: 2,
  [Symbol.iterator]: function* () {
    yield this.gerente;
    yield this.vendedor;
  }
};

const todaEquipe = {
  equipeDev,
  equipeVendas,
  [Symbol.iterator]: function* () {
    yield *equipeDev;
    yield *equipeVendas;
  }
};

const PercorreLinha477El = () => {

  let trajeto = [];
  for (let parada of percorreLinha477()) {
    trajeto.push(parada);
  }

  return(
    <ul>
      { trajeto.map(parada => <li key={ parada }>{ parada }</li>) }
    </ul>
  );

}

const PercorreEquipeDevEl = () => {

  let equipe = [];
  for (let membro of equipeDev) {
    equipe.push(membro);
  }

  return(
    <ul>
      { equipe.map(membro => <li key={ membro }>{ membro }</li>) }
    </ul>
  );

}

const PercorreTodaEquipeEl = () => {

  let equipe = [];
  for (let membro of todaEquipe) {
    equipe.push(membro);
  }

  return(
    <ul>
      { equipe.map(membro => <li key={ membro }>{ membro }</li>) }
    </ul>
  );

}

export default () => {
  return(
    <div>
      <h1>Exercício Generators</h1>
      <PercorreLinha477El />
      <PercorreEquipeDevEl />
      <PercorreTodaEquipeEl />
    </div>
  );
}
