import React from 'react';
import moment from 'moment';

const SEPARATOR = <span className="mx-2">|</span>;

const DISMISS_BTN_STYLE = {
    color: '#6c757d',
    fontSize: 'inherit',
    margin: 0,
    padding: 0,
};

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
            <h5 className="mb-0">{ title }</h5>
            <small className="text-muted">
                { points } points
                { SEPARATOR }{ author }
                { SEPARATOR }{ moment( created_at, 'YYYY-MM-DD' ).fromNow() }
                { SEPARATOR }{ num_comments } comments
                { SEPARATOR }({ url })
                { SEPARATOR }<button className="btn btn-link" style={ DISMISS_BTN_STYLE }>Dismiss</button>
            </small>
        </div>
    );
};

export default JournalListGroupItem;
