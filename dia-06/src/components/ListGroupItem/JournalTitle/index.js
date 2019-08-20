import React from 'react';

const JournalTitle = props => {
    const {
        title,
    } = props;

    return (
        <h5 className="mb-0">{ title }</h5>
    );
};

export default JournalTitle;
