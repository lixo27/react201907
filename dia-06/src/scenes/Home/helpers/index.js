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
