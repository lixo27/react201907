import React from 'react';
import moment from "moment";

const Title = ( { title } ) => {
    return ( <h5 className="mb-0">{ title }</h5> );
};

const Meta = ( { points, author, created_at, num_comments, url, children } ) => {
    return (
        <small className="text-muted">

            { points } points
            <MetaSeparator/>

            { author }
            <MetaSeparator/>

            { moment( created_at, 'YYYY-MM-DD' ).fromNow() }
            <MetaSeparator/>

            { num_comments } comments
            <MetaSeparator/>

            ({ url })
            <MetaSeparator/>

            { children }

        </small>
    );
};

const MetaSeparator = () => {
    return ( <span className="mx-2">|</span> );
};

const Dismiss = () => {
    const style = {
        color: 'inherit',
        fontSize: 'inherit',
        margin: 0,
        padding: 0,
    };

    return (
        <button className="btn btn-link" style={ style }>
            Dismiss
        </button>
    );
};

const JournalListGroupItem = ( { item } ) => {
    return (
        <div className="list-group-item">
            <Title title={ item.title }/>
            <Meta points={ item.points }
                  author={ item.author }
                  created_at={ item.created_at }
                  num_comments={ item.num_comments }
                  url={ item.url }>
                <Dismiss/>
            </Meta>
        </div>
    );
};

export default JournalListGroupItem;
