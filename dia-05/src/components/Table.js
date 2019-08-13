import React from 'react';

export default ({ children }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Author</th>
          <th scope="col">Title</th>
          <th scope="col">Comments</th>
        </tr>
      </thead>
      <tbody>
        { children }
      </tbody>
    </table>
  );
}
