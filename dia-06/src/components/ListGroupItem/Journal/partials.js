import React from 'react';
import moment from "moment";

const Title = ( { item } ) => {
    const { title } = item;

    return (
        <h5 className="mb-0">{ title }</h5>
    );
};

const Meta = ( { item, children } ) => {
    const separator = <span className="mx-2">|</span>;
    const { points, author, created_at, num_comments, url } = item;

    return (
        <small className="text-muted">

            { points } points
            { separator }

            { author }
            { separator }

            { moment( created_at, 'YYYY-MM-DD' ).fromNow() }
            { separator }

            { num_comments } comments
            { separator }

            ({ url })
            { separator }

            { children }

        </small>
    );
};

const Dismiss = () => {
    return (
        <button className="btn btn-link btn-dismiss">
            Dismiss
        </button>
    );
};

export {
    Title,
    Meta,
    Dismiss,
}
