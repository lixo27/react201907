import React from 'react';

const map = new Map();
map.set('nome', 'Thiago');
map.set('idade', 36);
map.set('habilitado', true);

console.log(map.keys());
// MapIterator {"nome", "idade", "habilitado"}

console.log(map.values());
// MapIterator {"Thiago", 36, true}

console.log(map.entries());
// MapIterator {"nome" => "Thiago", "idade" => 36, "habilitado" => true}

// map.clear();
// console.log(map);
// Map(0) {}

// map.delete('habilitado');
// console.log(map);
// Map(2) {"nome" => "Thiago", "idade" => 36}

export default function() {
  return(
    <div>
      <h2>Exercício Map</h2>
      <ul>
        <li>Nome: {map.get('nome')}</li>
        <li>Idade: {map.get('idade')}</li>
        <li>Habilitado: {map.get('habilitado') ? 'sim' : 'nao'}</li>
        <li>Map Size: {map.size}</li>
        <li>Map Has: {map.has('idade') ? 'sim' : 'nao'}</li>
      </ul>
    </div>
  );
};
