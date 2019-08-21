import axios from "axios";

const axiosInstance = axios.create( {
    baseURL: 'https://hn.algolia.com/api/v1'
} );

const hackernews = {

    /**
     *
     * @param query
     * @param page
     * @param hitsPerPage
     * @returns {Promise<AxiosResponse<T>>}
     */
    search: ( query, page = 0, hitsPerPage = 10 ) => {
        return axiosInstance.get( '/search', {
            params: { query, page, hitsPerPage }
        } );
    }

};

export default hackernews;
