import React from 'react';
import { TouchableOpacity, View, FlatList } from 'react-native';
import styled from 'styled-components/native';

import NoteComponent from './Note';

/** 
const notes = [
    { id: 0, content: '邁爾斯-布里格斯性格分類法（MBTI）' },
    { id: 1, content: '凱爾西氣質分類法' },
    { id: 2, content: '四個偏好' },
    { id: 3, content: '認知功能' },
    { id: 4, content: '主導功能：內向直覺（Ni）' },
    { id: 5, content: '輔助功能：外向情感（Fe）' },
    { id: 6, content: '第三功能：內向思考（Ti）' },
    { id: 7, content: '劣勢功能：外向實感（Se）' },
    { id: 8, content: '最不重視健康、財務安全、名聲與地位' },
    { id: 9, content: '在工作、親密關係、學校等多個領域報告的壓力最大' },
];
*/

const FeedView = styled.View`
    height: 100;
    overflow: hidden;
    margin-bottom: 10px;
`;

const Separator = styled.View`
    height: 1;
    width: 100%;
    background-color: #ced0ce;
`;

const NoteFeed = props => {
    return (
        <View>
            <FlatList
            data={props.notes}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={() => <Separator />}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => 
                        props.navigation.navigate('Note', {
                            id: item.id
                        })
                    }
                    >
                <FeedView>
                    <NoteComponent note={item} /> 
                </FeedView>   
                </TouchableOpacity> 
                )}
            />
        </View>
    );
};


export default NoteFeed;