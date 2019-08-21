import axios from "axios";

export const axiosInstance = axios.create( {
    baseURL: 'https://hn.algolia.com/api/v1'
} );

export const search = ( query, page = 0, hitsPerPage = 10 ) => {
    return axiosInstance.get( '/search', {
        params: { query, page, hitsPerPage }
    } );
};
