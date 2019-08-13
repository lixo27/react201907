const fetchTopStories = query => {
  return fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
};

export default {
  fetchTopStories
}
