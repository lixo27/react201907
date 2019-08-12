import React from 'react';

export default ({ children }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Author</th>
          <th scope="col">Comment</th>
          <th scope="col">Likes</th>
        </tr>
      </thead>
      <tbody>
        { children }
      </tbody>
    </table>
  );
}
