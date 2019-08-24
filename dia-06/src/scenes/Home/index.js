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
    }

    async componentDidMount() {
        const { searchQuery } = this.state;

        const response = await search( searchQuery );
        this.setState( updateStateBySearchResponse( response ) );
    }

    render() {
        const { apologies, searchHits } = this.state;

        return (
            <HomeMarkup
                title="Hacker News!"
                apologies={ apologies }
                searchHits={ searchHits }
            />
        );
    }

}

export default Home;
