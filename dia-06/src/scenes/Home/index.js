import React from 'react';

import HomeMarkup from "./components/HomeMarkup";
import { updateStateBySearchResponse } from "./helpers";
import { search } from "../../utility/hackernews";

class Home extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            apologies: null,
            searchHits: [],
            searchQuery: 'react',
            searchPage: 0,
        };

        this.doSearch = this.doSearch.bind( this );
        this.onSearchChange = this.onSearchChange.bind( this );
        this.onSearchSubmit = this.onSearchSubmit.bind( this );
    }

    async componentDidMount() {
        this.doSearch();
    }

    async doSearch() {
        const { searchQuery } = this.state;
        const response = await search( searchQuery );
        this.setState( updateStateBySearchResponse( response ) );
    }

    onSearchChange( event ) {
        const { target: { value } } = event;
        this.setState( { searchQuery: value } );
    }

    async onSearchSubmit( event ) {
        this.doSearch();
        event.preventDefault();
    }

    render() {
        const { apologies, searchQuery, searchHits } = this.state;

        return (
            <HomeMarkup
                title="Hacker News!"
                apologies={ apologies }
                searchHits={ searchHits }
                searchValue={ searchQuery }
                onSearchChange={ this.onSearchChange }
                onSearchSubmit={ this.onSearchSubmit }
            />
        );
    }

}

export default Home;
