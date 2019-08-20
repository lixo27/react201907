import React from 'react';
import moment from 'moment';

const btnStyle = {
    color: 'inherit',
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
                <span className="mx-2">|</span>

                { author }
                <span className="mx-2">|</span>

                { moment( created_at, 'YYYY-MM-DD' ).fromNow() }
                <span className="mx-2">|</span>

                { num_comments } comments
                <span className="mx-2">|</span>

                ({ url })
                <span className="mx-2">|</span>

                <button
                    className="btn btn-link"
                    style={ btnStyle }
                >
                    Dismiss
                </button>

            </small>
        </div>
    );
};

export default JournalListGroupItem;
