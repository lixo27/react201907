import React from 'react';

export default ({ id, author, comment, likes }) => {
  return (
    <tr>
      <th scope="row">{ id }</th>
      <td>{ author }</td>
      <td>{ comment }</td>
      <td>{ likes }</td>
    </tr>
  );
}
