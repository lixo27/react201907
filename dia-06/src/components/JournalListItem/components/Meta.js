import React from 'react';

const Meta = ( { children } ) => (
    <small className="text-muted">
        { children }<span className="mx-2">|</span>
    </small>
);

export default Meta;
