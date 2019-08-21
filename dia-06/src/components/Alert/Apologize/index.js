import React from 'react';

const withApologiesOnly = ( Component ) => ( { apologies, ...rest } ) => {
    return ( apologies && apologies.length > 0 )
        ? <Component apologies={ apologies } { ...rest }/>
        : null;
};

const ApologizeAlert = props => {
    const { apologies } = props;

    return (
        <div className="alert alert-warning">
            { apologies }
        </div>
    );
};

export default withApologiesOnly( ApologizeAlert );
