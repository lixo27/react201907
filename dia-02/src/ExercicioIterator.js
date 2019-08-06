import React from 'react';

const arrayItems = [1, 2, 3, 4, 5, 6, 7];
const resultIterator = [];

const it = arrayItems[Symbol.iterator]();
let nextVal = it.next();

do {
  resultIterator.push(nextVal.value + 5);
  nextVal = it.next();
} while(!nextVal.done)

export default function() {
  return(
    <div>
      <h2>Exercício Iterator</h2>
      <ul>
        <li>resultIterator: {resultIterator}</li>
      </ul>
    </div>
  );
};
