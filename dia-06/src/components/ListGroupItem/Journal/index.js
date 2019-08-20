import React from 'react';

import JournalDismiss from "../JournalDismiss";
import JournalMeta from "../JournalMeta";
import JournalTitle from "../JournalTitle";

const JournalListGroupItem = props => {
    const {
        author,
        created_at,
        num_comments,
        points,
        title,
        url,
    } = props.item;

    return (
        <div className="list-group-item">
            <JournalTitle title={ title }/>
            <JournalMeta
                points={ points }
                author={ author }
                created_at={ created_at }
                num_comments={ num_comments }
                url={ url }
            >
                <JournalDismiss/>
            </JournalMeta>
        </div>
    );
};

export default JournalListGroupItem;
