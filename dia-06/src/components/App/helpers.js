const updateStateOnSearchResponse = response => (previous, props) => {
  return {
    'searchHits': response.data.hits
  }
};

export {
  updateStateOnSearchResponse
}
