import React from 'react';
import moment from "moment";

import Dismiss from "./components/Dismiss";
import Meta from "./components/Meta";
import Title from "./components/Title";

const JournalListItem = ( { item } ) => (
    <div className="list-group-item">
        <Title>{ item.title }</Title>
        <Meta>{ item.points } points</Meta>
        <Meta>{ item.author }</Meta>
        <Meta>{ moment( item.created_at, 'YYYY-MM-DD' ).fromNow() }</Meta>
        <Meta>{ item.num_comments } comments</Meta>
        <Meta>({ item.url })</Meta>
        <Dismiss/>
    </div>
);

export default JournalListItem;
