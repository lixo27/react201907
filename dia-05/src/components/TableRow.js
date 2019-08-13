import React from 'react';

export default ({ objectID, author, title, comments }) => {
  return (
    <tr>
      <th scope="row">{ objectID }</th>
      <td>{ author }</td>
      <td>{ title }</td>
      <td>{ comments }</td>
    </tr>
  );
}
