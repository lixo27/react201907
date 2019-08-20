import React from 'react';
import moment from 'moment';

const JournalMeta = props => {
    const { children, item } = props;
    const seprator = <span className="mx-2">|</span>;

    return (
        <small className="text-muted">

            { item.points } points
            { seprator }

            { item.author }
            { seprator }

            { moment( item.created_at, 'YYYY-MM-DD' ).fromNow() }
            { seprator }

            { item.num_comments } comments
            { seprator }

            ({ item.url })
            { seprator }

            { children }

        </small>
    );
};

export default JournalMeta;
