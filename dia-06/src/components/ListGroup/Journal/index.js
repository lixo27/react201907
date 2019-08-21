import React from 'react';

const JournalListGroup = props => {
    const { children } = props;
    
    return ( children && children.length > 0 )
        ? <div className="list-group">{ children }</div>
        : null;
};

export default JournalListGroup;
