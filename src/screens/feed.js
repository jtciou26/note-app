import React from 'react';
import { Text } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';

const GET_NOTES = gql`
    query noteFeed { 
        noteFeed {
        notes {
            id
            createdAt
            content
            favoriteCount
            author {
                username
                id
                avatar
            }
        }
    }
}`;

const Feed = props => {
    const { loading, error, data } = useQuery(GET_NOTES);
    if (loading) return <Loading />;
    if (error) return <Text>Error loading notes...</Text>;
    return <NoteFeed notes={data.noteFeed.notes} navigation={props.navigation} />;
};

//上方標題
Feed.navigationOptions = {
    title: 'Feed'
};

export default Feed;
