import React from 'react';

import Search from './components/Search';
import Separator from './components/Separator';
import Table from './components/Table';
import TableRow from './components/TableRow';

import hackerNews from './data/hackerNews';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'redux',
      searchResult: null
    };
  }

  componentDidMount() {
    const { searchTerm } = this.state;

    hackerNews.fetchTopStories(searchTerm)
      .then(response => response.json())
      .then(searchResult => this.setState({ searchResult }))
      .catch(error => error);
  }

  render() {
    const { searchResult } = this.state;
    const searchResultHits = searchResult ? searchResult.hits : [];

    return (
      <div>

        <Search
          labelText="Search"
          buttonText="Search Now!"
          />

        <Separator />

        <Table>
          { searchResultHits.map((val) => {
            return (
              <TableRow
                key={ val.objectID }
                objectID={ val.objectID }
                author={ val.author }
                title={ val.title }
                comments={ val.num_comments }
                />
            );
          }) }
        </Table>

      </div>
    );
  }
}
