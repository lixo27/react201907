import React from 'react';

const arrayItems = [1, 2, 3, 4, 5, 6, 7];

const summation = (total, number) => total + number;
const isEven = number => number % 2 === 0;
const makeDouble = number => number * 2;

const resultReduce = arrayItems.reduce(summation, 0);
const resultEvery = arrayItems.every(isEven);
const resultSome = arrayItems.some(isEven);
const resultFilter = arrayItems.filter(isEven);
const resultMap = arrayItems.map(makeDouble);
const resultForEach = [];

arrayItems.forEach(number => resultForEach.push(number + 3));

export default function() {
  return(
    <div>
      <h2>Exercício Array</h2>
      <ul>
        <li>Reduce: {resultReduce}</li>
        <li>Every: {resultEvery ? 'yes' : 'no'}</li>
        <li>Some: {resultSome ? 'yes' : 'no'}</li>
        <li>Filter: {resultFilter}</li>
        <li>Map: {resultMap}</li>
        <li>ForEach: {resultForEach}</li>
      </ul>
    </div>
  );
};
