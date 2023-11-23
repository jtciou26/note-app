//這是插入式畫面，使用者不會與之互動。開啟應用程式後，將使用此畫面檢查權杖是否存在，並將使用者引導至登入畫面或app

import React, { useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import Loading from '../components/Loading';

const AuthLoading = props => {
    const checkLoginState = async () => {
        //擷取權杖值
        const userToken = await SecureStore.getItemAsync('token');
        //若權杖存在，則前往app、否則前往驗證畫面
        props.navigation.navigate(userToken ? 'App' : 'Auth');
    };
    //元件安裝後立即呼叫
    useEffect(() => {
        checkLoginState();
    })
    return <Loading />;
};

export default AuthLoading;