import hackernews from '../../api/hackernews';

const doSearch = async ( state ) => {
    const { searchQuery, searchPage } = state;

    return hackernews.get( '/search', {
        params: {
            query: searchQuery,
            page: searchPage,
            hitsPerPage: 10
        }
    } );
};

const updateStateBySearchResponse = ( response ) => ( previous, props ) => {
    const { data: { hits, page } } = response;

    const apologies = hits.length === 0 ? 'Apologies, but no entries were found.' : null;

    return {
        apologies,
        searchHits: hits,
        searchPage: page
    };
};

export {
    doSearch,
    updateStateBySearchResponse,
}
