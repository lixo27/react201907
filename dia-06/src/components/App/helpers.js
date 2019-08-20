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

    return {
        searchHits: hits,
        searchPage: page
    };
};

export {
    doSearch,
    updateStateBySearchResponse,
}
