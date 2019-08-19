import hackernews from '../../api/hackernews';

const doSearch = async ({searchQuery, searchPage}) => {

  return hackernews.get('/search', {
    params: {
      query: searchQuery,
      page: searchPage,
      hitsPerPage: 10
    }
  })

};

const updateStateBySearchResponse = ({data: {hits, page}}) => (previous, props) => {

  return {
    searchHits: hits,
    searchPage: page
  }

};

export {
  doSearch,
  updateStateBySearchResponse,
}
