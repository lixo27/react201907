import React from "react";

export const updateStateBySearchResponse = ( response ) => () => {
    const { data: { hits, page } } = response;

    let apologies = null;
    if ( hits.length === 0 ) {
        apologies = 'Apologies, but no entries were found.';
    }

    return {
        apologies,
        searchHits: hits,
        searchPage: page,
    };
};

export const withChildren = Component => ( { children, ...rest } ) => {
    return ( children && children.length > 0 )
        ? <Component { ...rest }>{ children }</Component>
        : null;
};
