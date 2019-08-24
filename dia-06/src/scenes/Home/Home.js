import React from 'react';

import JournalList from "../../components/JournalList";
import JournalListItem from "../../components/JournalListItem";
import JournalSearch from "../../components/JournalSearch";
import LayoutHeader from "../../components/LayoutHeader";
import LayoutMain from "../../components/LayoutMain";
import { withChildren } from "../../utility/helpers";
import { search } from "../../utility/hackernews";

const JournalListWithChildren = withChildren( JournalList );

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

        const journalListItems = searchHits.map( item => (
            <JournalListItem key={ item.objectID } item={ item }/>
        ) );

        return (
            <div>
                <LayoutHeader title="Hacker News!">
                    <JournalSearch/>
                </LayoutHeader>
                <LayoutMain apologies={ apologies }>
                    <JournalListWithChildren>{ journalListItems }</JournalListWithChildren>
                </LayoutMain>
            </div>
        );
    }

}

export default Home;

const updateStateBySearchResponse = ( { data: { hits, page } } ) => () => {
    const apologies = ( hits && hits.length === 0 )
        ? 'Apologies, but no entries were found.'
        : null;

    return {
        apologies,
        searchHits: hits,
        searchPage: page,
    };
};
