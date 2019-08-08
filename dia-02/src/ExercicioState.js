import React from 'react';

const people = [
  {id: 1, name: 'thiago'},
  {id: 2, name: 'lucas'},
  {id: 3, name: 'fabiana'},
  {id: 4, name: 'luciana'},
  {id: 5, name: 'irineu'},
  {id: 6, name: 'marina'},
];

class ExercicioState extends React.Component {

  constructor(props) {
    super(props);

    this.doSearch = this.doSearch.bind(this);
    this.doRemove = this.doRemove.bind(this);
    this.getItems = this.getItems.bind(this);

    this.state = {
      search: '',
      items: people
    }
  }

  doSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  doRemove(itemId) {
    this.setState({
      items: this.state.items.filter((item) => {
        return itemId !== item.id;
      })
    });
  }

  getItems() {
    const searchResult = this.state.items.filter(item => {

      if ('' === this.state.search) {
        return true;
      }

      return item.name === this.state.search;

    });

    return searchResult.map(item => {
      return <li key={item.id}>
          <span
            onClick={() => this.doRemove(item.id)}
            >[x]</span>
          { item.name }
        </li>
    });
  }

  render() {
    return(
      <div>
        <h2>Exercício State</h2>
        <form>
          <input type="text" onChange={this.doSearch} />
        </form>
        <ul>{ this.getItems() }</ul>
      </div>
    );
  }

}

export default ExercicioState;
