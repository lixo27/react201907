import axios from "axios";

export const hackernewsInstance = axios.create( {
    baseURL: 'https://hn.algolia.com/api/v1'
} );

export const hackernewsSearch = ( query, page = 0, hitsPerPage = 10 ) => {
    return hackernewsInstance.get( '/search', {
        params: { query, page, hitsPerPage }
    } );
};
