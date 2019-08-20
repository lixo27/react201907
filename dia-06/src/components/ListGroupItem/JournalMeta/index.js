import React from 'react';
import moment from 'moment';

const SEPARATOR = <span className="mx-2">|</span>;

const JournalMeta = props => {
    const {
        author,
        created_at,
        num_comments,
        points,
        url,
        children,
    } = props;

    return (
        <small className="text-muted">

            { points } points
            { SEPARATOR }

            { author }
            { SEPARATOR }

            { moment( created_at, 'YYYY-MM-DD' ).fromNow() }
            { SEPARATOR }

            { num_comments } comments
            { SEPARATOR }

            ({ url })
            { SEPARATOR }

            { children }

        </small>
    );
};

export default JournalMeta;
