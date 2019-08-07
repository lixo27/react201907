import React from 'react';

class Carro {
  static abrirPorta() {
    return 'por favor, entre! a porta está aberta.'
  }
}

export default () => {
  return(
    <div>
      <h1>Exercício Static Methods</h1>
      <ul>
        <li>{ Carro.abrirPorta() }</li>
      </ul>
    </div>
  );
}
