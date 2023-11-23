import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
// createAppContainer一次顯示一個畫面並在畫面之間切換
// createSwitchNavigator使用者瀏覽時將路徑重設為預設狀態、並且不提供向後導覽選項
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Feed from './feed';
import Favorites from './favorites';
import MyNotes from './mynotes';
import NoteScreen from './note';

import AuthLoading from './authloading';
import Settings from './settings';
import SignIn from './signin';
import SignUp from './signup';

//導覽堆疊
const AuthStack = createStackNavigator({
    SignIn: SignIn,
    SignUp: SignUp
});

const SettingsStack = createStackNavigator({
    Settings: Settings
});

const FeedStack = createStackNavigator({
    Feed: Feed,
    Note: NoteScreen
});

const MyStack = createStackNavigator({
    MyNotes: MyNotes,
    Note: NoteScreen
});

const FavStack = createStackNavigator({
    Favorites: Favorites,
    Note: NoteScreen
});

//導覽標籤
const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: FeedStack,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="home" size={24} color={tintColor} />
            )
        }
    },
    MyNoteScreen: {
        screen: MyStack,
        navigationOptions: {
            tabBarLabel: 'My Notes',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="notebook" size={24} color={tintColor} />
            )
        }
    },
    FavoriteScreen: {
        screen: FavStack,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="star" size={24} color={tintColor} />
            )
        }
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
            tabBarLabel: 'Settings',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="account" size={24} color={tintColor} />
            )
        } 
    }
});

const SwitchNavigator = createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        Auth: AuthStack,
        App: TabNavigator
    },
    {
        initialRouteName: 'AuthLoading'
    }
);

export default createAppContainer(SwitchNavigator);