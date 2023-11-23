import React from 'react';
import { Text, View } from 'react-native';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';
import Loading from '../components/Loading';

const GET_MY_FAVORITES = gql`
query me {
    me {
        id
        username
        favorites {
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
}
`;

const Favorites = props => {
    const { loading, error, data } = useQuery(GET_MY_FAVORITES);

    if (loading) return <Loading />;
    if (error) return <Text>Error loading notes</Text>;
    if (data.me.favorites.length !== 0) {
        return <NoteFeed notes={data.me.favorites} navigation={props.navigation} />
    } else {
        return <Text>還沒有筆記</Text>
    }
};

//上方標題
Favorites.navigationOptions = {
    title: '最愛'
};

export default Favorites;