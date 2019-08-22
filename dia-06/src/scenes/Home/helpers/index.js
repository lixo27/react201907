import React from "react";

export const withChildren = Component => ( { children, ...rest } ) => {
    return ( children && children.length > 0 )
        ? <Component { ...rest }>{ children }</Component>
        : null;
};

export const updateStateBySearchResponse = ( { data: { hits, page } } ) => () => {
    const apologies = ( hits && hits.length === 0 )
        ? 'Apologies, but no entries were found.'
        : null;

    return {
        apologies,
        searchHits: hits,
        searchPage: page,
    };
};
