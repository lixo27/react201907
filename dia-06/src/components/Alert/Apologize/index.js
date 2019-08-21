import React from 'react';

const ApologizeAlert = ( { children } ) => {
    return (
        <div className="alert alert-warning">
            { children }
        </div>
    );
};

export default ApologizeAlert;
