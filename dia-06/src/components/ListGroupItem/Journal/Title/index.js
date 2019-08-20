import React from 'react';

const JournalTitle = props => {
    const { item } = props;

    return (
        <h5 className="mb-0">{ item.title }</h5>
    );
};

export default JournalTitle;
