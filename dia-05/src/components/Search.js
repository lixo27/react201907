import React from 'react';

export default ({ labelText, buttonText, placeholder = 'Search value here' }) => {
  return (
    <form className="form-inline">
      <div className="form-group mx-sm-3">
        <label htmlFor="searchInput" className="sr-only">{ labelText }</label>
        <input type="text" className="form-control" id="searchInput" placeholder={ placeholder } />
      </div>
      <button type="submit" className="btn btn-primary">{ buttonText }</button>
    </form>
  );
};
