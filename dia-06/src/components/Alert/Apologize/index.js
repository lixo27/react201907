import React from 'react';

const ApologizeAlert = props => {
    const { apologies } = props;

    return ( apologies && apologies.length > 0 )
        ? <div className="alert alert-warning">{ apologies }</div>
        : null;
};

export default ApologizeAlert;
