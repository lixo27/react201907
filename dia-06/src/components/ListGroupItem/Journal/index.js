import React from 'react';

const JournalListGroupItem = props => {
    const {
        author,
        num_comments,
        points,
        title,
        url,
    } = props.item;

    return (
        <div className="list-group-item">
            <h5 className="mb-0">{ title }</h5>
            <small className="text-muted">
                { points } points | { author } | 2 years ago | { num_comments } comments | ({ url })
            </small>
        </div>
    );
};

export default JournalListGroupItem;
