//讓使用者登入帳戶的畫面。嘗試登入成功後，就會將權杖儲存在裝置上。

import React from 'react';
import { View, Button, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useMutation, gql } from '@apollo/client';

import UserForm from '../components/UserForm';
import Loading from '../components/Loading';

const SIGNIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const SignIn = props => {
    //使用機碼值token儲存權杖
    //儲存權杖後、前往app畫面
    const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
        onCompleted: data => {
        SecureStore.setItemAsync('token', data.signIn).then(
            props.navigation.navigate('App')
        );
    }
});
    

    if (loading) return <Loading />;
    return (
        <React.Fragment>
            {error && <Text>Error signing in!</Text>}
            <UserForm
            action={signIn}
            formType="signIn"
            navigation={props.navigation}
            />
        </React.Fragment>
    );
};

SignIn.navigationOptions = {
  title: 'Sign In'
};

export default SignIn;
