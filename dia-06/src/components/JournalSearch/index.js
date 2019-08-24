import React from 'react';

const JournalSearch = ( { value, onChange, onSubmit } ) => (
    <form className="form-inline" onSubmit={ onSubmit }>
        <input
            className="form-control"
            type="text"
            placeholder="Search"
            value={ value }
            onChange={ onChange }
        />
    </form>
);

export default JournalSearch;
