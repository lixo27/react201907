import React from 'react';

const morning_message = (strings, ...values) => {
  return `${strings[0]}${values[0]}. Have a nice day!`;
};

const name = 'Thiago';
const hello = `Hello, ${name}`;
const morning = morning_message`Hello, ${name}`;

const letter = `Hello, ${name}.
I hope you have a really nice day.
Thanks very much for your help.
`

export default function() {
  return(
    <div>
      <h2>Exercício Template String</h2>
      <ul>
        <li>{hello}</li>
        <li>{morning}</li>
      </ul>
      <pre>{letter}</pre>
    </div>
  );
};
