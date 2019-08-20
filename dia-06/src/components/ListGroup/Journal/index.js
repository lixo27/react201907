import React from 'react';

const JournalListGroup = props => {
    const { children } = props;

    return (
        <div className="list-group">
            { children }
        </div>
    );
};

export default JournalListGroup;
