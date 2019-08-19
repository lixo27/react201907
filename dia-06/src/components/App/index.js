import React from 'react';

import {doGetSearch} from './helpers';
import {updateStateOnSearchResponse} from './helpers';

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
    const response = await doGetSearch(this.state.searchQuery, this.state.searchPage);
    this.setState(updateStateOnSearchResponse(response));
  }

  render() {
    console.log(this.state);

    return (
      <pre>hello, hackernews!</pre>
    );
  }

}

export default App;
