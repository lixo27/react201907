import React from 'react';

const user = {
  firstName: 'Thiago',
  secondName: 'Senna',
  email: 'thiago@yopmail.com'
};

const cores = [
  'azul', 'verde', 'amarelo'
];

const rotas = {
  rapidas: [
    'rota 1',
    'rota 2',
    'rota 3'
  ]
};

const UserEl = () => {
  const {firstName} = user;
  const {secondName, email} = user;

  return(
    <ul>
      <li>{ firstName }</li>
      <li>{ secondName }</li>
      <li>{ email }</li>
    </ul>
  );

}

const ApelidoEl = () => {
  const {secondName:apelido} = user;

  return(
    <ul>
      <li>{ apelido }</li>
    </ul>
  );

}

const CoresEl = () => {
  const [azul, verde] = cores;

  return(
    <ul>
      <li>{ azul }</li>
      <li>{ verde }</li>
    </ul>
  );
}

const RotasEl = () => {
  const {rapidas:[rota1, , rota3]} = rotas;

  return(
    <ul>
      <li>{ rota1 }</li>
      <li>{ rota3 }</li>
    </ul>
  );
}

export default () => {
  return(
    <div>
      <h1>Exercício Destructuring</h1>
      <UserEl />
      <ApelidoEl />
      <CoresEl />
      <RotasEl />
    </div>
  );
}
