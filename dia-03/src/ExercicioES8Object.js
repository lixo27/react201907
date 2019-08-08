import React from 'react';

const pessoa = {
  nome: 'Thiago',
  idade: 36
}

export default () => {

  const entries = Object.entries(pessoa);
  const values = Object.values(pessoa);
  const map = new Map(entries);

  return(
    <div>
      <h1>Exercício ES8 Object</h1>
      <ul>
        <li>{ entries[0][0] }: { entries[0][1] }</li>
        <li>{ entries[1][0] }: { entries[1][1] }</li>
      </ul>
      <ul>
        <li>{ values[0] }</li>
        <li>{ values[1] }</li>
      </ul>
      <ul>
        <li>Nome: { map.get('nome') }</li>
        <li>Idade: { map.get('idade') }</li>
      </ul>
    </div>
  );
}
