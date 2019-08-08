import React from 'react';

const user = {
  name: 'Thiago',
  age: 36
};

const proxy = new Proxy(user, {
  get(target, property){
    return 'name' === property ? `${target[property]} Senna` : target[property];
  }
});

const revocableProxy = Proxy.revocable(user, {
  get(target, property){
    return 'name' === property ? `${target[property]} Senna` : target[property];
  }
});

// revocableProxy.revoke();

export default () => {

  return(
    <div>
      <h1>Exercício Proxy</h1>
      <ul>
        <li>Nome: { proxy.name }</li>
        <li>Idade: { proxy.age }</li>
      </ul>
      <ul>
        <li>Nome: { revocableProxy.proxy.name }</li>
        <li>Idade: { revocableProxy.proxy.age }</li>
      </ul>
    </div>
  );

}
