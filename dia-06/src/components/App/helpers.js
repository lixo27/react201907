import hackernews from '../../api/hackernews';

const doSearch = async (query, page) => {

  const hitsPerPage = 10;

  return hackernews.get('/search', {
    params: {
      query,
      page,
      hitsPerPage
    }
  });

};

const updateStateBySearchResponse = response => (previous, props) => {

  const {hits, page} = response.data;

  return {
    searchHits: hits,
    searchPage: page
  }

};

export {
  doSearch,
  updateStateBySearchResponse,
}
