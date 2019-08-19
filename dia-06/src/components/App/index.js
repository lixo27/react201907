import React from 'react';

import {doSearch} from './helpers';
import {updateStateBySearchResponse} from './helpers';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchHits: [],
      searchQuery: 'redux',
      searchPage: 0,
    };
  }

  async componentDidMount() {
    const {searchQuery, searchPage} = this.state;
    const response = await doSearch(searchQuery, searchPage);
    this.setState(updateStateBySearchResponse(response));
  }

  render() {
    console.log(this.state);

    return (
      <p>hello, hackernews!</p>
    );
  }

}

export default App;
