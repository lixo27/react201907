import React from 'react';

const AlertWarning = props => {
    const { children } = props;

    return (
        <div className="alert alert-warning">
            { children }
        </div>
    );
};

export default AlertWarning;
