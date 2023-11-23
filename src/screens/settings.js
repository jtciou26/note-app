//在設定畫面中，使用者可以按一下按鈕並登出，登出後，將回到登入畫面。

import React from 'react';
import { View, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const Settings = props => {
    //刪除權杖後、前往驗證畫面
    const signOut = () => {
        SecureStore.deleteItemAsync('token').then(
            props.navigation.navigate('Auth')
        );
    };

    return (
        <View>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};

Settings.navigationOptions = {
    title: 'Settings'
  };
  
  export default Settings;