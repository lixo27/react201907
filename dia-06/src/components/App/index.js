import React from 'react';

import hackernews from '../../api/hackernews';
import {updateStateOnSearchResponse} from './helpers';

console.log(updateStateOnSearchResponse);

export default class extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchHits: [],
      searchQuery: 'redux',
      searchPage: 0,
    };
  }

  componentDidMount() {
    hackernews.get('/search', {
      params: {
        'query': this.state.searchQuery,
        'page': this.state.searchPage,
        'hitsPerPage': 10
      }
    }).then(response => {
      this.setState(updateStateOnSearchResponse(response));
    });
  }

  render() {
    console.log(this.state);

    return (
      <p>hello, hackernews!</p>
    );
  }

}
