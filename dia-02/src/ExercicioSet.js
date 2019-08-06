import React from 'react';

const set = new Set();
set.add('Thiago');
set.add(36);
set.add(36);

// uso de for...of
const dados = [];
for (const val of set) {
  dados.push(val);
}

// set.clear();
// console.log(set);
// Set(0) {}

// set.delete(36);
// console.log(set);
// Set(1) {"Thiago"}

export default function() {
  return(
    <div>
      <h2>Exercício Set</h2>
      <ul>
        <li>{dados[0]}</li>
        <li>{dados[1]}</li>
        <li>{dados[2] ? dados[2] : 'nao repete'}</li>
      </ul>
    </div>
  );
};
