import React from 'react';

const profissoes = [
  'desenvolvedor',
  'eletricista',
  'medico'
];

const PadStartEl = () => {

  const applyPad = profissao => <pre key={ profissao }>{ profissao.padStart(13, '-') }</pre>

  return(
    <ul>
      <li>{ profissoes.map(applyPad) }</li>
    </ul>
  );
}

const PadEndEl = () => {

  const applyPad = profissao => <pre key={ profissao }>{ profissao.padEnd(13, '-') }</pre>

  return(
    <ul>
      <li>{ profissoes.map(applyPad) }</li>
    </ul>
  );
}

export default () => {
  return(
    <div>
      <h1>Exercício ES8 Pad</h1>
      <PadStartEl />
      <PadEndEl />
    </div>
  );
}
