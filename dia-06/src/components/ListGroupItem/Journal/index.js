import React from 'react';

import JournalDismiss from "./Dismiss";
import JournalMeta from "./Meta";
import JournalTitle from "./Title";

const JournalListGroupItem = props => {
    const { item } = props;

    return (
        <div className="list-group-item">
            <JournalTitle item={ item }/>
            <JournalMeta item={ item }>
                <JournalDismiss/>
            </JournalMeta>
        </div>
    );
};

export default JournalListGroupItem;
