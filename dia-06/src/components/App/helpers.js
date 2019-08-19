import hackernews from '../../api/hackernews';

const doGetSearch = async (query, page) => {
  return hackernews.get('/search', {
    params: {
      'query': query,
      'page': page,
      'hitsPerPage': 10
    },
  });
};

const updateStateOnSearchResponse = response => (previous, props) => {
  return {
    'searchHits': response.data.hits
  }
};

export {
  doGetSearch,
  updateStateOnSearchResponse,
}
