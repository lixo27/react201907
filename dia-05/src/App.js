import React from 'react';

import Search from './components/Search';
import Separator from './components/Separator';
import Table from './components/Table';
import TableRow from './components/TableRow';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div>

        <Search
          labelText="Search"
          buttonText="Search Now!"
          />

        <Separator />

        <Table>
          { this.state.comments.map((comment) => {
            return (
              <TableRow
                key={ comment.id }
                id={ comment.id }
                author={ comment.author }
                comment={ comment.comment }
                likes={ comment.likes }
                />
            );
          }) }
        </Table>

      </div>
    );
  }
}
